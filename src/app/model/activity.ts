import { User } from "./user";

export class Activity {

  
    constructor(  
        public idAct: number | null, 
        public description: string | undefined,
        public actDate: Date | undefined,
        public status: number | undefined,
        public user: User | undefined
    ) {}

    static statuses = [
        { key: 1, description: 'Completada' },
        { key: 0, description: 'Pendiente' }
      ]

    getStatusName() {
        switch (this.status) {
          case 1:
            return 'Completada';
          case 0:
            return 'Pendiente';
          default:
            return ''
        }
      }

      

  }