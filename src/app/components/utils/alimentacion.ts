
export class Alimentacion {

    private titulo: string;
    private url: string;
    private resume: string;

    constructor(titulo: string, resume: string) {
        this.titulo = titulo;
        this.url="#"+titulo;
        this.resume = resume;
    }

    getTitulo(): string {
        return this.titulo;
    }
    getResume(): string {
        return this.resume;
    }
    getUrl(): string {
        return this.url;
    }
}

