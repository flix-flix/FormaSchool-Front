export interface Role {
    id: string;
    name: string;
    color: string;
    // TODO Models
    rights: { desc: string; value: boolean; }[];
    commonRights: { desc: string; value: boolean; }[];
}
