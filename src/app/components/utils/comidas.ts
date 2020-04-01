export class Comidas {

    private titulo: string;
    private tipo: string;
    private resume: string;
    private url_img: string;
    private ingredientes: string[];
    private metodoPreparacion: string;

    constructor(titulo: string, tipo: string, resume: string, url_img: string, ingredientes: string[], metodoPreparacion: string) {
        this.titulo = titulo;
        this.tipo = tipo;
        this.resume = resume;
        this.url_img = url_img;
        this.ingredientes = ingredientes;
        this.metodoPreparacion = metodoPreparacion;
    }

    getTitulo(): string {
        return this.titulo;
    }
    getResume(): string {
        return this.resume;
    }
    getUrl_Img(): string {
        return this.url_img;
    }
    getTipo(): string {
        return this.tipo;
    }
    getIngredientes(): string[] {
        return this.ingredientes;
    }
    getMetodoPreparacion(): string {
        return this.metodoPreparacion;
    }

}