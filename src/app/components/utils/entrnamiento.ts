export class Entrenamiento {

    private titulo: string;
    private url: string;
    private tips: string[];

    constructor(titulo: string, url: string, tips: string[]) {
        this.titulo = titulo;
        this.url = url;
        this.tips = tips;
    }

    getTitulo(): string {
        return this.titulo;
    }
    getTips(): string[] {
        return this.tips;
    }
    getUrl(): string {
        return this.url;
    }
}