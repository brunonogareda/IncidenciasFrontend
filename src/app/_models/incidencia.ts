import { Instalacion }  from '../_models/index';

export class Incidencia {
  estado: string;
  autor: string;
  data?: Date;
  ot: number;
  zonaApartamento: string;
  presuposto: string;
  factura: string;
  descripcionCurta: string;
  cod_parte: number;
  observacions: string;
  instalacion?: Instalacion;
  id: number;
  solPresuposto: boolean;
}
