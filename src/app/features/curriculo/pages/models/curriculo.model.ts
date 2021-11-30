import { Data } from "@angular/router";

export interface Qualificacoes {
  id: number;
  certificado: String;
  curso: string
}

export interface Experiencia{
  logo: String;
  empresa: string;
  cargo: string;
  dataEntrada: string | Data;
  dataSaida: string | Data;
  descricao: string;
}

export interface FormacaoAcademica{
  curso: string,
  escola: string,
  conclusao: string
}

export interface CursoIdiomas{
  idioma: string,
  escola: string,
  nivel: string
}