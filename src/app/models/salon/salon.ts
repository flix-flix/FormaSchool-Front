import { MsgThreadComponent } from "src/app/components/messages/msg-thread/msg-thread.component";
import { Message } from "src/app/models/messages/message";
import { EmojiService } from "../../services/emoji.service";

export class Salon {
    html: string;

    constructor(public id: string, public teamId: string, public name: string, public msgs: Message[], public thread: MsgThreadComponent) {
        this.html = EmojiService.processEmoji(name, teamId);
        msgs.forEach(msg => msg.processEmoji(teamId));

        this.initThread();
    }

    // =========================================================================================

    setThread(thread) {
        this.thread = thread;
        this.initThread();
    }

    initThread() {
        this.thread.setMessages(this.msgs);
        setTimeout(() => this.thread.scrollToBottom(), 10);
    }

    // =========================================================================================

    addMsg(msg: Message) {
        msg.processEmoji(this.teamId);
        this.msgs.push(msg);

        this.thread.setMessages(this.msgs);

        // TODO
        // if (msg.sender. == this.memberId)
        if (scroll)
            setTimeout(() => this.thread.scrollToBottom(), 250);
    }

    deleteMsg(msgDelete) {
        this.msgs = this.msgs.filter(msg => msg.id !== msgDelete.messageId);
        this.thread.setMessages(this.msgs);
    }
}
