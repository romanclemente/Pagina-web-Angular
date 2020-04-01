import { Injectable } from '@angular/core';
import { Alimentacion } from '../components/utils/alimentacion';
import { Comidas } from '../components/utils/comidas';
import { Entrenamiento } from '../components/utils/entrnamiento';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  //--------------------------------------------Defino los distintos alimentos-----------------------------------------------------------------//
  arrayAlimentaciones: Alimentacion[] = [
  new Alimentacion("Dieta Basal", "Dieta equilibrada, destinada a aquellos persona que no necesitan unos requerimientos dietéticos especiales y comen variado cualquier tipo de alimento comestible"),
  new Alimentacion("Dieta Vegetariana", "Una dieta vegetariana se enfoca a la alimentación con verduras. Esto incluye frutas, verduras, guisantes y alubias secas, granos, semillas y nueces. No existe un único tipo de dieta vegetariana."),
  new Alimentacion("Dieta Vegana", "Una dieta vegana es la que no incluye productos de origen animal como carne, pescado, leche, queso, huevos y miel. Incluso hay veganos que van más lejos y no cocinan la verdura")];
  
lentejasIngredientes: string[] = ["160 gramos de pasta de lentejas rojas", "6 espárragos verdes", "1 cebolleta", "1/2 pimienta verde", "1/2 pimiento rojo", "1/2 pimiento amarillo", "1/2 cebolla morada", "ajo fresco",
  "sal", "aceite de oliva", "cebollino para decorar"];
chucrutIngredientes: string[] = ["500 gramos de col", "1/2 cucharada de sal"]
calabaza: string[] = ["800 gramos de calabaza","150 gramos de cebollas","150 gramos de puerros","1 diente de ajo","1 manzana golden","1/2 cucharadita de nuez moscada","1/2 cucharadita de curry","1 litro de agua","100 mililitros de leche evaporada"," 1 puñado de semillas variadas","sal", "aceite de oliva"]
pastelVerd: string[] = ["5 huevos","1/2 cebolla","250ml de nata para cocinar (crema de leche)"," 1 pimiento rojo", "2 zanahorias 150g de guisantes", "150g de alubias verdes", "Sal y pimienta","aceite" ]
padthai:string[]=["100 gr de noodles","1 calabacín","1 zanahoria grande o dos medianas","media cebolla","medio pimiento verde","medio pimiento rojo","2 dientes de ajo"];
tomtate:string[]=["1 kg de tomates maduros (variedad canario o pera, mejor no los de ensalada)","1 cebolla","1 diente de ajo","2 guindillas secas (cayena)","1 cucharada sopera de hierbas provenzales (o bien 1 cucharadita de orégano, otra de tomillo y otra de romero","pimienta negra","sal","agua","aceite de oliva"];
rollito:string[]=["8 huevos","30 gramos de harina","500 gramos de brócoli","50 gramos de queso rallado","100 gramos de queso crema","100 gramos de jamón de york","aceite de oliva","sal","pimienta negra molida","cebollino picado (para decorar)"];
pollete:string[]=["1 picantón","1 cebolla","1 diente de ajo","1 patata","125 mililitros de caldo de pollo","125 mililitros de vino blanco","aceite de oliva","sal","pimienta negra molida","1 rama de tomillo (para decorar)"];
pechuga:string[]=["1 kilo de pechuga de pollo","300 gramos de champiñones","250 mililitros de sidra","200 mililitros de caldo de verduras","200 mililitros de nata para cocinar","aceite de oliva","sal","pimienta","perrejil"];

 array2: Comidas[] = [
  new Comidas("Pasta de lentejas rojas con verduras", "Vegetariana", "Os enseñamos preparar un delicioso y colorido plato de pasta de lentejas rojas con verduras, una nutritiva receta muy fácil y rápida de hacer, ¡lista en 20 minutos! Este tipo de pasta es alto en proteínas y no contiene gluten, ¡una forma diferente y divertida de comer legumbres!",
    "assets/resources/1239x697 (1).jpg", this.lentejasIngredientes, "Corta en aros finos la cebolleta. Pica en dados pequeños los pimientos y la cebolla morada. Corta en aros el ajo fresco y los espárragos. Reserva también las puntas de los espárragos.Pon el wok al fuego y añade aceite. Cuando esté caliente, incorpora las verduras picadas y añade sal. Saltea, tapa y cocina unos 8-10 minutos, debe quedar al dente. Añade la pasta de lentejas rojas a una cazuela al fuego con abundante agua caliente. Cuece entre 5-7 minutos. Retira las puntas de los espárragos del salteado de verduras y agrega la pasta al wok con las verduras. Saltea y añade una cucharadita de caldo de cocción de la pasta. Remueve, añade una pizca de sal y deja cocer un minuto.Sirve la pasta de lentejas rojas con verduras salteadas."),
  new Comidas("Chucrut o col fermentada", "Vegana",
    "Chucrut casero, popular en Alemania, Francia, Suiza, Polonia y Rusia, es el acompañamiento perfecto de col fermentada para salchichas y otras recetas de carne. Una receta ideal para celebrar el Oktoberfest",
    "assets/resources/1239x697.jpg", this.chucrutIngredientes, "Corta la col en juliana.Pasa a un bol y aprieta con fuerza las hojas con las manos para romper las fibras y hacer que suelte agua. Añade la sal y sigue rompiendo. Deja reposar unos 30 minutos a temperatura ambiente para que suelte más humedad.Introduce la col en un bote hermético y deja reposar 4 semanas en un lugar seco y oscuro.Sirve el chucrut y acompaña con salchichas y láminas de pepinillos."),
    new Comidas("Crema de calabaza sin patata", "Vegetariana", "Te enseñamos a preparar una crema de calabaza sin patata con curry, nuez moscada, manzana y semillas variadas.",
    "assets/resources/1239x697 (2).jpg", this.calabaza, "Corta en aros finos la cebolleta. Pica en dados pequeños los pimientos y la cebolla morada. Corta en aros el ajo fresco y los espárragos. Reserva también las puntas de los espárragos.Pon el wok al fuego y añade aceite. Cuando esté caliente, incorpora las verduras picadas y añade sal. Saltea, tapa y cocina unos 8-10 minutos, debe quedar al dente. Añade la pasta de lentejas rojas a una cazuela al fuego con abundante agua caliente. Cuece entre 5-7 minutos. Retira las puntas de los espárragos del salteado de verduras y agrega la pasta al wok con las verduras. Saltea y añade una cucharadita de caldo de cocción de la pasta. Remueve, añade una pizca de sal y deja cocer un minuto.Sirve la pasta de lentejas rojas con verduras salteadas."),
    new Comidas("Pastel de verduras al horno", "Vegetariana", "Hace poco, pregunté en mi página de Facebook que gustaría que cocinase. Las ideas fueron diversas. Pero una «recetera» del canal, me sugirió que preparase una forma de hacer verduras diferente, para sus hijas. Así que, me puse manos a la obra y grabé este pastel de verduras al horno. El vídeo, lo tienes al final de este artículo, como siempre. Preparar este pastel de verduras es algo sencillo, con no muchos ingredientes. Y puedes cambiar las verduras según tu gusto o estación del año. Una versión muy rica, es la siguiente",
    "assets/resources/pastel-de-verduras1.jpg", this.pastelVerd, "Cocemos los guisantes y las alubias verdes. Para ello ponemos a cocer abundante agua en una ollita y le echamos una pizca de sal. Cuando esté en ebullición, echamos ambos ingrediente y dejamos cocer 10 minutos. Pasado el tiempo, los escurrimos del agua y dejamos reposar Mientras tanto, ponemos un chorrito de aceite a calentar a fuego suave. Añadimos primero la zanahoria cortada en tacos. Ponemos una pizca de sal y dejamos cocinar 5 minutos, mientras removemos con una cuchara de palo Pasado el tiempo añadimos la cebolla y el pimiento rojo también en tacos. Añadimos esta verdura más tarde porque la zanahoria es bastante más dura. Salpimentamos y cocinamos unos 10 minutos más, mientras removemos de vez en cuando Hecho todo esto, ponemos los huevos en un bol. Añadimos su parte de sal y pimienta y batimos. Después añadimos la nata para cocinar y mezclamos con los huevos. Hecho esto, añadimos todas las verduras, que ya no estarán demasiado calientes, para que no cuajen el huevo y volvemos a mezclar nuevamente Ponemos esta mezcla en un molde. Uno con el que hagas tus bizcochos será suficiente. Si es de silicona mejor. Si es metálico también te valdrá pero no olvides untarlo de aceite para que no se pegue después Finalmente metemos en el horno previamente calentado a 160ºC. Dejamos cocinar aquí unos 45 minutos, hasta que puedas meter un cuchillo y éste salga limpio"),
    new Comidas("Pad Thai vegano sencillo", "Vegana", "Hoy os traigo una versión simplificada (¡y muy saludable!) del Pad Thai tailandés. Para prepararlo, podemos elegir los noodles que prefiramos (de arroz, de quinoa o de trigo sarraceno). También os recomiendo tener a mano al menos un calabacín para espiralizar ya que será una buena forma de equilibrar el plato y aumentar su contenido de verduras.",
    "assets/resources/padthai.jpg", this.padthai, "Primero prepara las verduras, para tenerlas listas antes de echarlas al wok. Al ser una cocción rápida (apenas 3 minutos) es mejor tener todo preparado para no ponernos nerviosos mientras cocinamos o que alguna de las verduras se nos queme. Para ello espiralizamos el calabacín y la zanahoria (yo utilizo Spirali) y cortamos en juliana la cebolla, el pimiento rojo y el pimiento verde. También picamos muy fino el ajo.Al tiempo, podemos poner a cocer los noodles (el tiempo especificado por el fabricante, que variará en cada caso). También preparamos la salsa, mezclando la salsa de soja o el tamari con el sirope de ágave (se puede sustituir por otro endulzante natural que tengáis por casa), el vinagre y la cayena (se puede sustituir por otra especia o salsa picante que prefiráis).Ponemos un chorro de aceite de oliva en el wok (también se puede cocinar con aceite de coco) y cuando esté caliente añadimos las verduras. Salteamos 3 minutos y añadimos los noodles (ya cocidos) y la salsa que acabamos de preparar. Removemos un par de minutos más y ya tenemos listo nuestro Pad Thai vegano, super sencillo."),
    new Comidas("Sopa de tomate picante", "Vegana", "Hace tiempo os enseñé mi receta de crema de tomate con gambas y curry, deliciosa ¿verdad? Hoy os presento otra variante para hacer con tomate, calentita y reconfortante, y muy fácil de preparar! Me encanta como primer plato o como plato único en una cena!!!",
    "assets/resources/tomate.jpg", this.tomtate, "Comenzamos precalentando el horno a 200 grados con calor arriba y abajo.En la bandeja de horno colocamos un papel de plata que ocupe toda la bandeja. Otra opción es emplear una fuente de horno grande (en cuyo caso habrá que limpiarla después 😉 ). Sobre ella, colocamos los tomates cortados en 3 rodajas gruesas cada uno, el diente de ajo cortado en 2, la cebolla picada en trozos pequeños, la sal, la pimienta, cayena y hierbas, y por último un buen chorro de aceite de oliva.Introducimos en el horno durante unos 20-25 minutos.Pasado ese tiempo, sacamos la bandeja del horno y volcamos todo su contenido (con los jugos incluidos!) en un cuenco grande o en la thermomix. Trituramos el conjunto hasta que quede cremoso (en thermomix, 1 minuto a velocidad 10)."),
    new Comidas("Rollo de tortilla con brócoli, jamón y queso (al horno)", "Basal", "Os enseñamos preparar un delicioso y colorido plato de pasta de lentejas rojas con verduras, una nutritiva receta muy fácil y rápida de hacer, ¡lista en 20 minutos! Este tipo de pasta es alto en proteínas y no contiene gluten, ¡una forma diferente y divertida de comer legumbres!",
    "assets/resources/1239x697 (3).jpg", this.rollito, "Pon una cazuela al fuego con abundante agua y cuando rompa a hervir, añade sal y el brócoli. Cuece unos 8 minutos. Retira del fuego, pasa por un escurridor y limpia el brócoli con abundante agua limpia para retirar la sal.Añade los huevos a un bol y bate con las varillas. Agrega la harina suavemente removiendo. Salpimienta al gusto y mezcla. Agrega el queso rallado y mezcla con movimientos envolventes. Incorpora el brócoli y remueve para desmenuzarlo.Cubre la base de una bandeja con papel de horno y vierte la mezcla de brócoli encima. Introduce en el horno precalentado a 200ºC unos 10 minutos. Coloca la tortilla de verdura sobre un trapo limpio y retira el papel de horno con cuidado de no romper la tortilla. Unta la superficie de la tortilla con el queso crema y cubre con las lonchas de jamón. Enrolla la tortilla con ayuda del trapo y pasa a un plato o bandeja. Deja reposar 1 hora en el frigorífico. Sirve el rollo de tortilla de brócoli con jamón y queso y decora con cebollino picado."),
    new Comidas("Picantones al horno con patatas panaderas", "Basal", "Prepara un sabroso pollo picantón al horno con esta receta tan sencilla en la que lo acompañamos de irresistibles patatas panaderas, cebolla y una deliciosa salsa con base de caldo de pollo. ¡Un plato fácil y rápido de pollo asado!",
    "assets/resources/1239x697 (4).jpg", this.pollete, "Lava, pela y corta la patata en láminas finas. Corta la cebolla en juliana. Cubre la base de una bandeja para horno con las láminas de patata y reparte la cebolla por encima. Coloca el pollo picantón sobre la cama de patatas y cebolla y frota la piel del pollo con un diente de ajo para darle sabor. Agrega el caldo de pollo, el vino blanco y riega con un chorro de aceite de oliva. Salpimienta al gusto. Introduce la bandeja en el horno precalentado a 180ºC durante 40 minutos. A mitad de tiempo abre el horno y dale la vuelta al pollo para que se cocine y dore por ambos lados. Sirve el pollo picantón asado con patatas y cebolla y decora con una ramita de tomillo."),
    new Comidas("Pechugas de pollo a la sidra", "Basal", "Receta de pechugas de pollo con champiñones y salsa de sidra con caldo de verduras casero y un toque de pimienta.",
    "assets/resources/1239x697 (5).jpg", this.pechuga, "Limpia los champiñones y córtalos en láminas. Pon aceite de oliva en una cazuela amplia. Cuando el aceite esté caliente añade los filetes de pechuga y salpimienta. Fríe las pechugas por los dos lados. Retira de la cazuela y reserva. Añade los champiñones laminados a la cazuela utilizada para freír las pechugas. Salpimienta. Saltea unos minutos mientras remueves. Añade un poco más de aceite si es necesario. Cuando los champiñones empiecen a dorarse, añade la sidra y remueve. Deja que hierva un par de minutos para que se evapore el alcohol. Añade el caldo, la nata y la pimienta y deja cocer unos minutos más, hasta que reduzca la salsa. Añade las pechugas a la cazuela y deja que se cocine todo 2 minutos más. Espolvorea con perejil y sirve las pechugas con su salsa."),
  ];

  

  //--------------------------------------------Defino los distintos entrenamientos----------------------------------------------------------------//

  patina: string[] = ["patina 25 minutos, parar 5, y patina otros 25", "patina 30 minutos, parar 4,5, y patina otros 30", "patina 35 minutos, parar 4, y patina otros 35"];
  aerobic: string[] = ["Sesion de 30 primera semana", "Sesion de 35 segundo semana", "Sesion de 40 tercera semana"];
  pasear: string[] = ["pasear 20 minutos, parar 5, y pasear otros 20", "pasear 25 minutos, parar 4,5, y pasear otros 25", "pasear 35 minutos, parar 4, y pasear otros 35"];
  running: string[] = ["correr 10 minutos, parar 5, y correr otros 10", "correr 15 minutos, parar 4,5, y correr otros 15", "correr 20 minutos, parar 4, y correr otros 20"];
  swimng: string[] = ["nadar 10 minutos, parar 5, y nadar otros 10", "nadar 15 minutos, parar 4,5, y nadar otros 15", "nadar 20 minutos, parar 4, y nadar otros 20"];
  ciclismo: string[] = ["pedalear 15 minutos, parar 5, y pedalear otros 15", "pedalear 20 minutos, parar 4,5, y pedalear otros 20", "pedalear 30 minutos, parar 4, y pedalear otros 30"];
  entrenamientos: Entrenamiento[] = [new Entrenamiento("Correr", "assets/resources/running.jpg", this.running), new Entrenamiento("Nadar", "assets/resources/nadar.jpg", this.swimng),
  new Entrenamiento("Pasear", "assets/resources/pasear.jpg", this.pasear),new Entrenamiento("Ciclismo", "assets/resources/ciclismo.jpg", this.ciclismo),
  new Entrenamiento("Patinar", "assets/resources/patina.jpg", this.patina),new Entrenamiento("Aerobic", "assets/resources/aerobic.jpg", this.aerobic)];
  entrenamientosFiltrado:Entrenamiento;

  constructor() { }

  getEntrenamientos(): Entrenamiento[] {
    return this.entrenamientos;
  }

  getEntrenamientosPerso(filtro:string): Entrenamiento{
    this.entrenamientos.forEach(element => {
      if (element.getTitulo().includes(filtro)) {
      this.entrenamientosFiltrado=element;
      }
    });
    return this.entrenamientosFiltrado
  }

  getArray2(): Comidas[] {
    return this.array2;
  }

}