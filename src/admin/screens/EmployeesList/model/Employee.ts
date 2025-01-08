export interface Employee {
    user_id: string;
    user_name: string | null;
    user_email: string;
    user_address: string | null;
    user_phone_number: string | null;
    salary: number;
    create_at: string;
}