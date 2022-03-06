import { EmailValidator } from "@angular/forms";

export class User {
    constructor(
        public email?: string,
        public password?: string
    ) {}
}
