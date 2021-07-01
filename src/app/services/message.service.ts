import { Injectable } from '@angular/core';
import { FileModel } from '../models/file';
import { Message } from '../models/messages/message';
import { EmojiService } from './emoji.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private emojiService: EmojiService, private utilsService: UtilsService) { }

  // =========================================================================================

  fromJSON(msg: Message): Message {
    msg.file = FileModel.fromJSON(msg.file);
    msg.send = new Date(msg.send[0], msg.send[1] - 1, msg.send[2], msg.send[3], msg.send[4], msg.send[5]);
    if (msg.edit != null)
      msg.edit = new Date(msg.edit[0], msg.edit[1] - 1, msg.edit[2], msg.edit[3], msg.edit[4], msg.edit[5]);

    msg.html = this.processHtml(msg.content);

    //TODO teamId for msg emoji
    this.emojiService.processEmojiSetter(msg.html, "und3f1n3d", html => msg.html = html);
    return msg;
  }

  /** Generate an HTML representation of the content (with tags if markdown is used)
   * @param content The original string
   * @param replace true: remove the markdown markers
   */
  private processHtml = (content: string, replace: boolean = true): string => {
    let html = content.replace(/\n/g, "<br>");
    html = html.replace(/  /g, " &nbsp;");//TODO [Improve] space -> &nbsp;

    html = this.processHtmlSpan(html, "**", "bold", replace);
    html = this.processHtmlSpan(html, /((?<!\*)\*{1}(?!\*))|\*{3}/, "italic", replace); // *italic* | ***italic***
    html = this.processHtmlSpan(html, "__", "under", replace);
    html = this.processHtmlSpan(html, "~~", "strike", replace);

    html = this.processHtmlSpan(html, "```", "md_bloc", replace);
    html = this.processHtmlSpan(html, /((?<!`)`{1}(?!`))/, "md_bloc_inline", replace);

    return html;
  }

  /**
  * Add HTML tags for the given md marker
  * 
  * @param content The original string
  * @param search The markdown marker
  * @param clas The HTML class
  * @param replace true: remove the markdown markers
  * @returns A new string with the HTML tags
  */
  private processHtmlSpan = (content: string, search: string | RegExp, clas: string, replace: boolean = true): string => {
    let html = "";
    let first = 0, second = 0, prev = 0;
    let len = typeof search === "string" ? search.length : (["italic", "md_bloc_inline"].includes(clas) ? 1 : 2);

    // If contains 2 occurences of the given "md marker"
    while ((first = this.utilsService.indexOf(content, search, prev)) != -1
      && (second = this.utilsService.indexOf(content, search, first + len)) != -1) {
      html += content.substring(prev, first);
      html += `<span class="${clas}">${content.substring(first + (replace ? len : 0), second + (replace ? 0 : len))}</span>`;
      prev = second + len;
    }

    // Add the remaining content
    return html + content.substring(prev);
  }
}
