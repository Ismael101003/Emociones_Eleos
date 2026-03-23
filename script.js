// ================================
// ELEOS - Ne'urei Olam
// Grupo Juvenil Virgen del Carmen
// Base de datos AMPLIADA de versículos bíblicos
// ================================

const versiculos = {
    triste: [
        { texto: "El Señor está cerca de los quebrantados de corazón, y salva a los de espíritu abatido.", referencia: "Salmos 34:18" },
        { texto: "Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso.", referencia: "Mateo 11:28" },
        { texto: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.", referencia: "Salmos 46:1" },
        { texto: "Los que sembraron con lágrimas, con regocijo segarán.", referencia: "Salmos 126:5" },
        { texto: "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni dolor.", referencia: "Apocalipsis 21:4" },
        { texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.", referencia: "Isaías 41:10" },
        { texto: "Aunque ande en valle de sombra de muerte, no temeré mal alguno.", referencia: "Salmos 23:4" },
        { texto: "Él sana a los quebrantados de corazón, y venda sus heridas.", referencia: "Salmos 147:3" },
        { texto: "Por la noche durará el lloro, y a la mañana vendrá la alegría.", referencia: "Salmos 30:5" },
        { texto: "Bienaventurados los que lloran, porque ellos recibirán consolación.", referencia: "Mateo 5:4" },
        { texto: "Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.", referencia: "1 Pedro 5:7" },
        { texto: "El Señor es mi pastor, nada me faltará.", referencia: "Salmos 23:1" },
        { texto: "Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá.", referencia: "Juan 11:25" },
        { texto: "En mi angustia invoqué al Señor, y él me respondió.", referencia: "Salmos 120:1" },
        { texto: "Mis lágrimas han sido mi alimento de día y de noche.", referencia: "Salmos 42:3" },
        { texto: "Cercano está el Señor a todos los que le invocan.", referencia: "Salmos 145:18" },
        { texto: "El que consuela a los deprimidos, Dios, nos consoló.", referencia: "2 Corintios 7:6" },
        { texto: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.", referencia: "Salmos 119:105" },
        { texto: "Bendito sea el Dios de toda consolación.", referencia: "2 Corintios 1:3" },
        { texto: "No se turbe vuestro corazón; creéis en Dios, creed también en mí.", referencia: "Juan 14:1" },
        { texto: "Mi alma se deshace de tristeza; susténtame según tu palabra.", referencia: "Salmos 119:28" },
        { texto: "Él me invocará, y yo le responderé; con él estaré yo en la angustia.", referencia: "Salmos 91:15" },
        { texto: "Esperé yo al Señor, esperó mi alma; en su palabra he esperado.", referencia: "Salmos 130:5" },
        { texto: "El Señor es refugio para el oprimido, refugio en tiempos de angustia.", referencia: "Salmos 9:9" },
        { texto: "Destruirá a la muerte para siempre; y enjugará el Señor toda lágrima.", referencia: "Isaías 25:8" },
        { texto: "¿Por qué te abates, oh alma mía, y te turbas dentro de mí? Espera en Dios.", referencia: "Salmos 42:5" },
        { texto: "Aunque la higuera no florezca... con todo, yo me alegraré en el Señor.", referencia: "Habacuc 3:17-18" },
        { texto: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da.", referencia: "Juan 14:27" },
        { texto: "Jehová es bueno, fortaleza en el día de la angustia.", referencia: "Nahúm 1:7" },
        { texto: "Alegraos en la esperanza, mostraos pacientes en el sufrimiento.", referencia: "Romanos 12:12" },
        { texto: "Pero tenemos este tesoro en vasijas de barro.", referencia: "2 Corintios 4:7" },
        { texto: "Tú llevas la cuenta de mis huidas; recoges mis lágrimas en tu odre.", referencia: "Salmos 56:8" },
        { texto: "Claman los justos, y el Señor los oye, y los libra de todas sus angustias.", referencia: "Salmos 34:17" },
        { texto: "El Señor sostiene a todos los que caen, y levanta a todos los oprimidos.", referencia: "Salmos 145:14" },
        { texto: "Misericordioso y clemente es el Señor; lento para la ira, y grande en misericordia.", referencia: "Salmos 103:8" },
        { texto: "Con amor eterno te he amado; por tanto, te prolongué mi misericordia.", referencia: "Jeremías 31:3" },
        { texto: "No te desampararé, ni te dejaré.", referencia: "Hebreos 13:5" },
        { texto: "Considero que los sufrimientos del tiempo presente no son comparables con la gloria venidera.", referencia: "Romanos 8:18" },
        { texto: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.", referencia: "Salmos 91:1" },
        { texto: "Mi carne y mi corazón desfallecen; mas la roca de mi corazón es Dios.", referencia: "Salmos 73:26" },
        { texto: "Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores.", referencia: "Isaías 53:4" },
        { texto: "Esforzaos todos vosotros los que esperáis en el Señor, y tome aliento vuestro corazón.", referencia: "Salmos 31:24" },
        { texto: "Pues su enojo dura solo un momento, pero su favor dura toda la vida.", referencia: "Salmos 30:5" },
        { texto: "Porque tú eres mi roca y mi castillo; por tu nombre me guiarás.", referencia: "Salmos 31:3" },
        { texto: "En Dios solamente está acallada mi alma; de él viene mi salvación.", referencia: "Salmos 62:1" },
        { texto: "Porque el Señor consolará a Sion; consolará todas sus soledades.", referencia: "Isaías 51:3" },
        { texto: "De cierto, de cierto os digo, que vosotros lloraréis y lamentaréis... pero vuestra tristeza se convertirá en gozo.", referencia: "Juan 16:20" },
        { texto: "Toda la noche inundo de lágrimas mi lecho, riego mi cama con mi llanto.", referencia: "Salmos 6:6" },
        { texto: "Como a uno a quien consuela su madre, así os consolaré yo a vosotros.", referencia: "Isaías 66:13" },
        { texto: "Porque él no menospreció ni abominó la aflicción del afligido.", referencia: "Salmos 22:24" }
    ],
    alegre: [
        { texto: "Este es el día que hizo el Señor; nos gozaremos y alegraremos en él.", referencia: "Salmos 118:24" },
        { texto: "Alégrense siempre en el Señor. Insisto: ¡Alégrense!", referencia: "Filipenses 4:4" },
        { texto: "El gozo del Señor es nuestra fortaleza.", referencia: "Nehemías 8:10" },
        { texto: "Canten al Señor un cántico nuevo, porque ha hecho maravillas.", referencia: "Salmos 98:1" },
        { texto: "El corazón alegre hermosea el rostro.", referencia: "Proverbios 15:13" },
        { texto: "Servid al Señor con alegría; venid ante su presencia con regocijo.", referencia: "Salmos 100:2" },
        { texto: "Me mostrarás la senda de la vida; en tu presencia hay plenitud de gozo.", referencia: "Salmos 16:11" },
        { texto: "El fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.", referencia: "Gálatas 5:22" },
        { texto: "Cantaré al Señor, porque me ha hecho bien.", referencia: "Salmos 13:6" },
        { texto: "Mi alma glorifica al Señor, y mi espíritu se alegra en Dios mi Salvador.", referencia: "Lucas 1:46-47" },
        { texto: "Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación.", referencia: "1 Tesalonicenses 5:16-18" },
        { texto: "Aunque no lo han visto, ustedes lo aman y se alegran con un gozo inefable.", referencia: "1 Pedro 1:8" },
        { texto: "Alabaré al Señor en todo tiempo; su alabanza estará de continuo en mi boca.", recerencia: "Salmos 34:1" },
        { texto: "Engrandeced al Señor conmigo, y exaltemos a una su nombre.", referencia: "Salmos 34:3" },
        { texto: "Gozosos en la esperanza; sufridos en la tribulación; constantes en la oración.", referencia: "Romanos 12:12" },
        { texto: "Porque tú, oh Señor, me has alegrado con tus obras.", referencia: "Salmos 92:4" },
        { texto: "Grandes cosas ha hecho el Señor con nosotros; estaremos alegres.", referencia: "Salmos 126:3" },
        { texto: "Has cambiado mi lamento en baile; desataste mi cilicio, y me ceñiste de alegría.", referencia: "Salmos 30:11" },
        { texto: "Aclamad a Dios con alegría, toda la tierra.", referencia: "Salmos 66:1" },
        { texto: "Los justos se alegrarán, se gozarán delante de Dios, y saltarán de alegría.", referencia: "Salmos 68:3" },
        { texto: "Bueno es alabarte, oh Señor, y cantar salmos a tu nombre.", referencia: "Salmos 92:1" },
        { texto: "Que el Dios de la esperanza los llene de toda alegría y paz a ustedes que creen.", referencia: "Romanos 15:13" },
        { texto: "Alégrense con los que se alegran; lloren con los que lloran.", referencia: "Romanos 12:15" },
        { texto: "Regocijaos, y saltad de alegría, porque vuestra recompensa es grande en los cielos.", referencia: "Mateo 5:12" },
        { texto: "La luz de los ojos alegra el corazón, y las buenas nuevas engordan los huesos.", referencia: "Proverbios 15:30" },
        { texto: "Corona de los viejos son los nietos, y la honra de los hijos, sus padres.", referencia: "Proverbios 17:6" },
        { texto: "El que halla esposa halla el bien, y alcanza la benevolencia del Señor.", referencia: "Proverbios 18:22" },
        { texto: "Come tu pan con gozo, y bebe tu vino con alegre corazón.", referencia: "Eclesiastés 9:7" },
        { texto: "Despertad y cantad, moradores del polvo.", referencia: "Isaías 26:19" },
        { texto: "Cantaré al Señor en mi vida; a mi Dios cantaré salmos mientras viva.", referencia: "Salmos 104:33" },
        { texto: "Dulce será mi meditación en él; yo me regocijaré en el Señor.", referencia: "Salmos 104:34" },
        { texto: "Alabad a Dios en su santuario; alabadle en la magnificencia de su firmamento.", referencia: "Salmos 150:1" },
        { texto: "Todo lo que respira alabe al Señor. ¡Aleluya!", referencia: "Salmos 150:6" },
        { texto: "Mi boca publicará tu alabanza.", referencia: "Salmos 51:15" },
        { texto: "Con alegría sacaréis aguas de las fuentes de la salvación.", referencia: "Isaías 12:3" },
        { texto: "El Señor tu Dios está en medio de ti... se gozará sobre ti con alegría.", referencia: "Sofonías 3:17" },
        { texto: "Estas cosas os he hablado, para que mi gozo esté en vosotros, y vuestro gozo sea cumplido.", referencia: "Juan 15:11" },
        { texto: "La alegría del corazón es la vida del hombre.", referencia: "Eclesiástico 30:22" },
        { texto: "Dichoso el que teme al Señor, que se deleita grandemente en sus mandamientos.", referencia: "Salmos 112:1" },
        { texto: "Cantad a Dios, cantad; cantad a nuestro Rey, cantad.", referencia: "Salmos 47:6" },
        { texto: "Aclamen al Señor, toda la tierra; prorrumpan en cánticos y salmos.", referencia: "Salmos 98:4" },
        { texto: "Den gracias al Señor, porque él es bueno; su gran amor perdura para siempre.", referencia: "Salmos 107:1" },
        { texto: "Y mi alma se alegrará en el Señor; se regocijará en su salvación.", referencia: "Salmos 35:9" },
        { texto: "Sáciate de gozo en el Señor, y él te dará las peticiones de tu corazón.", referencia: "Salmos 37:4" },
        { texto: "Venid, aclamemos alegremente al Señor; cantemos con júbilo a la roca de nuestra salvación.", referencia: "Salmos 95:1" },
        { texto: "Mis labios se alegrarán cuando cante a ti, y mi alma, la cual redimiste.", referencia: "Salmos 71:23" },
        { texto: "Gozosos por la consolación con que Dios nos ha consolado.", referencia: "2 Corintios 7:7" },
        { texto: "Nuestra boca se llenó de risa, y nuestra lengua de alabanza.", referencia: "Salmos 126:2" },
        { texto: "Me alegré con los que me decían: A la casa del Señor iremos.", referencia: "Salmos 122:1" },
        { texto: "Aquel que nos amó nos ha dado consuelo eterno y buena esperanza por gracia.", referencia: "2 Tesalonicenses 2:16" }
    ],
   ansioso: [
        { texto: "No se angustien por nada, y en cualquier circunstancia, recurran a la oración y a la súplica, acompañadas de acción de gracias.", referencia: "Filipenses 4:6" },
        { texto: "Descarguen en él todas sus angustias, porque él tiene cuidado de ustedes.", referencia: "1 Pedro 5:7" },
        { texto: "Les dejo la paz, les doy mi paz. Que no tiemble su corazón ni se acobarde.", referencia: "Juan 14:27" },
        { texto: "No se angustien por el mañana, el cual tendrá sus propios afanes. Cada día tiene ya sus propios problemas.", referencia: "Mateo 6:34" },
        { texto: "La paz de Dios, que supera todo lo que podemos pensar, cuidará sus corazones y sus pensamientos.", referencia: "Filipenses 4:7" },
        { texto: "Fíjense en las aves del cielo: no siembran ni cosechan; sin embargo, el Padre celestial las alimenta. ¿No valen ustedes mucho más?", referencia: "Mateo 6:26" },
        { texto: "Tranquilícense y sepan que yo soy Dios.", referencia: "Salmos 46:10" },
        { texto: "Solo en Dios halla descanso mi alma; de él viene mi salvación.", referencia: "Salmos 62:1" },
        { texto: "Al de firme propósito guardarás en perfecta paz, porque en ti confía.", referencia: "Isaías 26:3" },
        { texto: "Busqué al Señor, y él me respondió; me libró de todos mis temores.", referencia: "Salmos 34:4" },
        { texto: "Cuando en mí la angustia iba en aumento, tu consuelo llenaba mi alma de alegría.", referencia: "Salmos 94:19" },
        { texto: "La angustia abate el corazón del hombre, pero una palabra amable lo alegra.", referencia: "Proverbios 12:25" },
        { texto: "Por eso les digo: No se preocupen por su vida, qué comerán; ni por su cuerpo, con qué se vestirán.", referencia: "Lucas 12:22" },
        { texto: "¿Quién de ustedes, por mucho que se preocupe, puede añadir una sola hora al curso de su vida?", referencia: "Lucas 12:25" },
        { texto: "Así que podemos decir con confianza: El Señor es mi ayuda; no temeré.", referencia: "Hebreos 13:6" },
        { texto: "Digan a los de corazón asustado: '¡Sean fuertes, no teman! Su Dios viene.'", referencia: "Isaías 35:4" },
        { texto: "Encomienda al Señor tus afanes, y él te sostendrá; no permitirá que el justo caiga.", referencia: "Salmos 55:22" },
        { texto: "En el mundo tendrán aflicción; pero confíen, yo he vencido al mundo.", referencia: "Juan 16:33" },
        { texto: "El Señor es mi luz y mi salvación; ¿a quién temeré?", referencia: "Salmos 27:1" },
        { texto: "Dios es nuestro refugio y nuestra fuerza, nuestra ayuda segura en momentos de angustia.", referencia: "Salmos 46:1" },
        { texto: "Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso.", referencia: "Mateo 11:28" },
        { texto: "Señor, ten piedad de nosotros; en ti hemos esperado. Sé nuestra fortaleza cada mañana.", referencia: "Isaías 33:2" },
        { texto: "El Señor está cerca de todos los que lo invocan.", referencia: "Salmos 145:18" },
        { texto: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios.", referencia: "Filipenses 4:6" },
        { texto: "El Señor te protegerá de todo mal; él protegerá tu vida.", referencia: "Salmos 121:7" },
        { texto: "En paz me acuesto y enseguida me duermo, porque tú solo, Señor, me haces vivir tranquilo.", referencia: "Salmos 4:8" },
        { texto: "Aun los jóvenes se cansan, se fatigan... pero los que confían en el Señor renovarán sus fuerzas.", referencia: "Isaías 40:30-31" },
        { texto: "Tú eres mi refugio; me guardarás de la angustia; con cánticos de liberación me rodearás.", referencia: "Salmos 32:7" },
        { texto: "Jehová peleará por vosotros, y vosotros estaréis tranquilos.", referencia: "Éxodo 14:14" },
        { texto: "Mi socorro viene del Señor, que hizo los cielos y la tierra.", referencia: "Salmos 121:2" },
        { texto: "Mucha paz tienen los que aman tu ley, y no hay para ellos tropiezo.", referencia: "Salmos 119:165" },
        { texto: "Señor, tú me das paz, porque todas nuestras obras tú las hiciste por nosotros.", referencia: "Isaías 26:12" },
        { texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo.", referencia: "Isaías 41:10" },
        { texto: "Yo soy el Señor tu Dios, que te sostiene por tu mano derecha y te dice: No temas.", referencia: "Isaías 41:13" },
        { texto: "Jehová es mi fortaleza y mi escudo; en él confió mi corazón.", referencia: "Salmos 28:7" },
        { texto: "Bendito el hombre que confía en el Señor, y cuya confianza es el Señor.", referencia: "Jeremías 17:7" },
        { texto: "Dirigirá mis pasos hacia la paz, guiará mis pies por caminos de rectitud.", referencia: "Lucas 1:79" },
        { texto: "Mas el fruto del Espíritu es amor, gozo, paz, paciencia.", referencia: "Gálatas 5:22" },
        { texto: "Señor, sálvame; sácame de las aguas profundas que me llegan hasta el cuello.", referencia: "Salmos 69:1-2" },
        { texto: "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera.", referencia: "Isaías 26:3" },
        { texto: "El Señor dará poder a su pueblo; el Señor bendecirá a su pueblo con paz.", referencia: "Salmos 29:11" },
        { texto: "En la multitud de mis pensamientos íntimos, tus consolaciones alegraban mi alma.", referencia: "Salmos 94:19" },
        { texto: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.", referencia: "Salmos 91:1" },
        { texto: "Con sus plumas te cubrirá, y debajo de sus alas estarás seguro.", referencia: "Salmos 91:4" },
        { texto: "Mi presencia irá contigo, y te daré descanso.", referencia: "Éxodo 33:14" },
        { texto: "Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo.", referencia: "Romanos 5:1" },
        { texto: "Y el mismo Señor de paz os dé siempre paz en toda manera.", referencia: "2 Tesalonicenses 3:16" },
        { texto: "Porque él es nuestra paz, que de ambos pueblos hizo uno, derribando el muro.", referencia: "Efesios 2:14" },
        { texto: "Gozosos en la esperanza; sufridos en la tribulación; constantes en la oración.", referencia: "Romanos 12:12" },
        { texto: "Acerquémonos, pues, confiadamente al trono de la gracia, para alcanzar misericordia.", referencia: "Hebreos 4:16" }
    ],
    solo: [
        { texto: "Tengan por seguro que yo estoy con ustedes siempre, hasta el fin de los tiempos.", referencia: "Mateo 28:20" },
        { texto: "Aunque mi padre y mi madre me abandonen, el Señor me acogerá.", referencia: "Salmos 27:10" },
        { texto: "Porque donde dos o tres se reúnen en mi nombre, allí estoy yo en medio de ellos.", referencia: "Mateo 18:20" },
        { texto: "No los dejaré huérfanos; volveré a ustedes.", referencia: "Juan 14:18" },
        { texto: "Mira que estoy a la puerta y llamo. Si alguno oye mi voz y abre, entraré y cenaré con él.", referencia: "Apocalipsis 3:20" },
        { texto: "¿A dónde podré ir lejos de tu Espíritu? ¿A dónde podré huir de tu presencia?", referencia: "Salmos 139:7" },
        { texto: "Dios da un hogar a los desamparados.", referencia: "Salmos 68:6" },
        { texto: "El Señor está cerca de todos los que lo invocan con sinceridad.", referencia: "Salmos 145:18" },
        { texto: "Cuando cruces las aguas, yo estaré contigo; cuando cruces los ríos, no te cubrirán.", referencia: "Isaías 43:2" },
        { texto: "El Señor tu Dios está en medio de ti... Se gozará en ti con alegría.", referencia: "Sofonías 3:17" },
        { texto: "Sé fuerte y valiente. No temas ni te asustes... el Señor tu Dios estará contigo.", referencia: "Josué 1:9" },
        { texto: "Nunca te dejaré; jamás te abandonaré.", referencia: "Hebreos 13:5" },
        { texto: "Pues yo soy el Señor tu Dios, que te sostiene de tu mano derecha.", referencia: "Isaías 41:13" },
        { texto: "Aunque camine por cañadas oscuras, nada temo, porque tú vas conmigo.", referencia: "Salmos 23:4" },
        { texto: "Pues estoy convencido de que ni la muerte ni la vida... nos podrá separar del amor de Dios.", referencia: "Romanos 8:38-39" },
        { texto: "Sin embargo, yo siempre estoy contigo; tú me has tomado de la mano derecha.", referencia: "Salmos 73:23" },
        { texto: "El Señor mismo marchará al frente de ti y estará contigo; nunca te dejará.", referencia: "Deuteronomio 31:8" },
        { texto: "Antes que te formase en el vientre te conocí, y antes que nacieses te santifiqué.", referencia: "Jeremías 1:5" },
        { texto: "No temas, que yo te he redimido; te he llamado por tu nombre; tú eres mío.", referencia: "Isaías 43:1" },
        { texto: "Mirad cuál amor nos ha dado el Padre, para que seamos llamados hijos de Dios.", referencia: "1 Juan 3:1" },
        { texto: "Mi alma tiene sed de Dios, del Dios vivo.", referencia: "Salmos 42:2" },
        { texto: "Cercano está el Señor a los quebrantados de corazón.", referencia: "Salmos 34:18" },
        { texto: "Porque él me esconderá en su tabernáculo en el día del mal.", referencia: "Salmos 27:5" },
        { texto: "Pero tú, Señor, eres escudo alrededor de mí, mi gloria, y el que levanta mi cabeza.", referencia: "Salmos 3:3" },
        { texto: "En mi angustia invoqué al Señor, y clamé a mi Dios. Él oyó mi voz desde su templo.", referencia: "Salmos 18:6" },
        { texto: "Dirige mis pasos por tu sendero, porque en ti está mi refugio.", referencia: "Salmos 25:4" },
        { texto: "Escucha, oh Señor, mi voz con que a ti clamo; ten misericordia de mí, y respóndeme.", referencia: "Salmos 27:7" },
        { texto: "Aguarda al Señor; esfuérzate, y aliéntese tu corazón; sí, espera al Señor.", referencia: "Salmos 27:14" },
        { texto: "Confiad en él en todo tiempo, oh pueblos; derramad delante de él vuestro corazón.", referencia: "Salmos 62:8" },
        { texto: "A ti, oh Señor, levanto mi alma. Dios mío, en ti confío.", referencia: "Salmos 25:1-2" },
        { texto: "Amo al Señor, pues ha oído mi voz y mis súplicas.", referencia: "Salmos 116:1" },
        { texto: "Volveos a la fortaleza, oh prisioneros de esperanza.", referencia: "Zacarías 9:12" },
        { texto: "Y conoceréis la verdad, y la verdad os hará libres.", referencia: "Juan 8:32" },
        { texto: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida.", referencia: "Juan 14:6" },
        { texto: "Pero el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas.", referencia: "Juan 14:26" },
        { texto: "Permaneced en mí, y yo en vosotros.", referencia: "Juan 15:4" },
        { texto: "Ya no os llamaré siervos... sino que os he llamado amigos.", referencia: "Juan 15:15" },
        { texto: "He aquí yo envío la promesa de mi Padre sobre vosotros.", referencia: "Lucas 24:49" },
        { texto: "Así que ya no sois extranjeros ni advenedizos, sino conciudadanos de los santos, y miembros de la familia de Dios.", referencia: "Efesios 2:19" },
        { texto: "Y si hijos, también herederos; herederos de Dios y coherederos con Cristo.", referencia: "Romanos 8:17" },
        { texto: "Porque somos hechura suya, creados en Cristo Jesús para buenas obras.", referencia: "Efesios 2:10" },
        { texto: "El que tiene mis mandamientos, y los guarda, ese es el que me ama; y será amado por mi Padre.", referencia: "Juan 14:21" },
        { texto: "Y yo rogaré al Padre, y os dará otro Consolador, para que esté con vosotros para siempre.", referencia: "Juan 14:16" },
        { texto: "He aquí, tú amas la verdad en lo íntimo, y en lo secreto me has hecho comprender sabiduría.", referencia: "Salmos 51:6" },
        { texto: "Tú eres mi refugio y mi escudo; en tu palabra he esperado.", referencia: "Salmos 119:114" },
        { texto: "Tú guardarás mis pies de resbalar, y mis ojos de lágrimas.", referencia: "Salmos 116:8" },
        { texto: "Oh Señor, tú me has examinado y conocido. Tú has conocido mi sentarme y mi levantarme.", referencia: "Salmos 139:1-2" },
        { texto: "Si tomare las alas del alba y habitare en el extremo del mar, aun allí me guiará tu mano.", referencia: "Salmos 139:9-10" },
        { texto: "Examíname, oh Dios, y conoce mi corazón; pruébame y conoce mis pensamientos.", referencia: "Salmos 139:23" },
        { texto: "Mis ovejas oyen mi voz, y yo las conozco, y me siguen, y yo les doy vida eterna.", referencia: "Juan 10:27-28" }
    ],
    miedo: [
        { texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo.", referencia: "Isaías 41:10" },
        { texto: "Dios no nos ha dado un espíritu de temor, sino de poder, de amor y de dominio propio.", referencia: "2 Timoteo 1:7" },
        { texto: "El Señor es mi luz y mi salvación; ¿a quién temeré?", referencia: "Salmos 27:1" },
        { texto: "Aunque pase por el valle de sombra de muerte, no temeré mal alguno, porque tú estás conmigo.", referencia: "Salmos 23:4" },
        { texto: "En el amor no hay temor, sino que el perfecto amor echa fuera el temor.", referencia: "1 Juan 4:18" },
        { texto: "Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo.", referencia: "Deuteronomio 31:6" },
        { texto: "Cuando siento miedo, pongo en ti mi confianza.", referencia: "Salmos 56:3" },
        { texto: "No se turbe vuestro corazón, ni tenga miedo.", referencia: "Juan 14:27" },
        { texto: "El Señor es mi refugio y mi fortaleza, mi Dios, en quien confío.", referencia: "Salmos 91:2" },
        { texto: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.", referencia: "Josué 1:9" },
        { texto: "El ángel del Señor acampa alrededor de los que le temen.", referencia: "Salmos 34:7" },
        { texto: "Yo soy tu escudo, y tu galardón será sobremanera grande.", referencia: "Génesis 15:1" },
        { texto: "No temáis a los que matan el cuerpo, mas el alma no pueden matar.", referencia: "Mateo 10:28" },
        { texto: "Buscad al Señor y su poder; buscad siempre su rostro.", referencia: "Salmos 105:4" },
        { texto: "El Señor está conmigo; no temeré lo que pueda hacerme el hombre.", referencia: "Salmos 118:6" },
        { texto: "Paz a vosotros. No tengáis miedo.", referencia: "Lucas 24:36" },
        { texto: "No temas, manada pequeña, porque a vuestro Padre le ha placido daros el reino.", referencia: "Lucas 12:32" },
        { texto: "En Dios alabaré su palabra; en Dios he confiado; no temeré.", referencia: "Salmos 56:4" },
        { texto: "Cae a tu lado mil, y diez mil a tu diestra; mas a ti no llegará.", referencia: "Salmos 91:7" },
        { texto: "No tendrás temor de espanto nocturno, ni de saeta que vuele de día.", referencia: "Salmos 91:5" },
        { texto: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.", referencia: "Salmos 91:1" },
        { texto: "Tú eres mi refugio y mi escudo; en tu palabra he esperado.", referencia: "Salmos 119:114" },
        { texto: "Hubiera yo desmayado, si no creyese que veré la bondad del Señor.", referencia: "Salmos 27:13" },
        { texto: "Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?", referencia: "Salmos 27:1" },
        { texto: "No temas, porque yo te redimí; te puse nombre, mío eres tú.", referencia: "Isaías 43:1" },
        { texto: "Porque yo Jehová soy tu Dios, quien te sostiene de tu mano derecha.", referencia: "Isaías 41:13" },
        { texto: "No temas, pues no serás confundida; y no te avergüences.", referencia: "Isaías 54:4" },
        { texto: "Mas el que me oyere, habitará confiadamente y vivirá tranquilo, sin temor del mal.", referencia: "Proverbios 1:33" },
        { texto: "El temor del hombre pondrá lazo; mas el que confía en el Señor será exaltado.", referencia: "Proverbios 29:25" },
        { texto: "Y no tengáis miedo de sus amenazas, ni os turbéis.", referencia: "1 Pedro 3:14" },
        { texto: "La paz os dejo, mi paz os doy... No se turbe vuestro corazón.", referencia: "Juan 14:27" },
        { texto: "Sed fuertes y valientes, no temáis ni os asustéis ante ellos.", referencia: "Deuteronomio 31:6" },
        { texto: "El Señor irá delante de ti; él estará contigo.", referencia: "Deuteronomio 31:8" },
        { texto: "No temas, porque no serás avergonzada.", referencia: "Isaías 54:4" },
        { texto: "No tengáis miedo, que yo estoy con vosotros para salvaros.", referencia: "Jeremías 42:11" },
        { texto: "No temáis, porque Dios ha venido para probaros.", referencia: "Éxodo 20:20" },
        { texto: "Estad quietos, y ved la salvación que Jehová hará hoy con vosotros.", referencia: "Éxodo 14:13" },
        { texto: "Cobra ánimo y esfuérzate, y haz la obra; no temas ni desmayes.", referencia: "1 Crónicas 28:20" },
        { texto: "El Señor es mi luz; ¿quién me hará temblar?", referencia: "Salmos 27:1" },
        { texto: "Aunque un ejército acampe contra mí, no temerá mi corazón.", referencia: "Salmos 27:3" },
        { texto: "En el día del bien goza del bien; y en el día del mal considera.", referencia: "Eclesiastés 7:14" },
        { texto: "Confía en el Señor, y haz el bien; y habitarás en la tierra.", referencia: "Salmos 37:3" },
        { texto: "El Señor guarda a los sencillos; estaba yo postrado, y me salvó.", referencia: "Salmos 116:6" },
        { texto: "No temerá de malas noticias; su corazón está firme, confiado en el Señor.", referencia: "Salmos 112:7" },
        { texto: "Justicia y juicio son el cimiento de tu trono.", referencia: "Salmos 89:14" },
        { texto: "Bajo sus alas estarás seguro; escudo y adarga es su verdad.", referencia: "Salmos 91:4" },
        { texto: "No te sobrevendrá mal, ni plaga tocará tu morada.", referencia: "Salmos 91:10" },
        { texto: "Pues a sus ángeles mandará acerca de ti, que te guarden en todos tus caminos.", referencia: "Salmos 91:11" },
        { texto: "Me invocará, y yo le responderé; con él estaré yo en la angustia.", referencia: "Salmos 91:15" },
        { texto: "Sácame del lodo, y no sea yo sumergido.", referencia: "Salmos 69:14" }
    ],
    agradecido: [
        { texto: "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros.", referencia: "1 Tesalonicenses 5:18" },
        { texto: "Alaba, alma mía, al Señor, y no olvides ninguno de sus beneficios.", referencia: "Salmos 103:2" },
        { texto: "Toda buena dádiva y todo don perfecto desciende de lo alto.", referencia: "Santiago 1:17" },
        { texto: "Den gracias al Señor, invoquen su nombre; den a conocer sus obras.", referencia: "1 Crónicas 16:8" },
        { texto: "Grande es el Señor, y digno de toda alabanza.", referencia: "Salmos 145:3" },
        { texto: "Entrad por sus puertas con acción de gracias, por sus atrios con alabanza.", referencia: "Salmos 100:4" },
        { texto: "Gracias sean dadas a Dios, que nos da la victoria por medio de Jesucristo.", referencia: "1 Corintios 15:57" },
        { texto: "Porque de él, y por él, y para él, son todas las cosas.", referencia: "Romanos 11:36" },
        { texto: "Cantad al Señor con gratitud; cantad con arpa a nuestro Dios.", referencia: "Salmos 147:7" },
        { texto: "El Señor ha hecho grandes cosas en nosotros; estaremos alegres.", referencia: "Salmos 126:3" },
        { texto: "Dando siempre gracias por todo al Dios y Padre.", referencia: "Efesios 5:20" },
        { texto: "Alabaré el nombre de Dios con cántico, lo exaltaré con alabanza.", referencia: "Salmos 69:30" },
        { texto: "Cantaré al Señor porque me ha hecho bien.", referencia: "Salmos 13:6" },
        { texto: "Te daré gracias, oh Señor, entre los pueblos; a ti cantaré salmos.", referencia: "Salmos 108:3" },
        { texto: "Bendeciré al Señor en todo tiempo; su alabanza estará siempre en mi boca.", referencia: "Salmos 34:1" },
        { texto: "¡Cuán grandes son tus obras, oh Señor! Muy profundos son tus pensamientos.", referencia: "Salmos 92:5" },
        { texto: "Gracias a Dios por su don inefable.", referencia: "2 Corintios 9:15" },
        { texto: "Todo lo que hacéis, hacedlo de corazón, como para el Señor.", referencia: "Colosenses 3:23" },
        { texto: "La palabra de Cristo habite en abundancia en vosotros... cantando con gracia.", referencia: "Colosenses 3:16" },
        { texto: "Demos gracias al Padre que nos hizo aptos para participar de la herencia.", referencia: "Colosenses 1:12" },
        { texto: "Por nada estéis afanosos... sean conocidas vuestras peticiones con acción de gracias.", referencia: "Filipenses 4:6" },
        { texto: "Alabaré yo el nombre de Dios con cántico.", referencia: "Salmos 69:30" },
        { texto: "Te alabaré, oh Señor Dios mío, con todo mi corazón.", referencia: "Salmos 86:12" },
        { texto: "Daré gracias al Señor conforme a su justicia.", referencia: "Salmos 7:17" },
        { texto: "Bueno es alabarte, oh Señor, y cantar salmos a tu nombre.", referencia: "Salmos 92:1" },
        { texto: "Entrad por sus puertas con acción de gracias.", referencia: "Salmos 100:4" },
        { texto: "Alabad al Señor, porque él es bueno; porque para siempre es su misericordia.", referencia: "Salmos 136:1" },
        { texto: "A ti, oh Dios de mis padres, te doy gracias y te alabo.", referencia: "Daniel 2:23" },
        { texto: "Te doy gracias, Señor, porque aunque te enojaste conmigo, tu furor se apartó.", referencia: "Isaías 12:1" },
        { texto: "Mi corazón se regocijó en el Señor, mi poder se exaltó en el Señor.", referencia: "1 Samuel 2:1" },
        { texto: "Daré gracias a tu nombre por tu misericordia y tu fidelidad.", referencia: "Salmos 138:2" },
        { texto: "Te alabaré; porque formidables, maravillosas son tus obras.", referencia: "Salmos 139:14" },
        { texto: "Gracias a Dios, que siempre nos lleva en triunfo en Cristo Jesús.", referencia: "2 Corintios 2:14" },
        { texto: "Abundando en acciones de gracias.", referencia: "Colosenses 2:7" },
        { texto: "Canten al Señor, bendigan su nombre; anuncien de día en día su salvación.", referencia: "Salmos 96:2" },
        { texto: "Tributad al Señor la gloria debida a su nombre.", referencia: "Salmos 96:8" },
        { texto: "El Señor es mi fortaleza y mi cántico, y ha sido mi salvación.", referencia: "Éxodo 15:2" },
        { texto: "Cantaré al Señor, porque se ha magnificado grandemente.", referencia: "Éxodo 15:1" },
        { texto: "Bendito sea el Señor, que diariamente nos colma de beneficios.", referencia: "Salmos 68:19" },
        { texto: "Mi boca hablará la alabanza del Señor.", referencia: "Salmos 145:21" },
        { texto: "Toda la tierra te adorará, y cantará a ti.", referencia: "Salmos 66:4" },
        { texto: "Venid, oíd todos los que teméis a Dios, y contaré lo que ha hecho a mi alma.", referencia: "Salmos 66:16" },
        { texto: "Bendito sea Dios, que no echó de sí mi oración, ni de mí su misericordia.", referencia: "Salmos 66:20" },
        { texto: "Alabadle por sus proezas; alabadle conforme a la muchedumbre de su grandeza.", referencia: "Salmos 150:2" },
        { texto: "Lo que es imposible para los hombres, es posible para Dios.", referencia: "Lucas 18:27" },
        { texto: "Su señor le dijo: Bien, buen siervo y fiel.", referencia: "Mateo 25:21" },
        { texto: "Porque tú eres mi roca y mi fortaleza.", referencia: "Salmos 31:3" },
        { texto: "Bendito sea el nombre de Dios de siglos en siglos.", referencia: "Daniel 2:20" },
        { texto: "A él sea gloria en la iglesia en Cristo Jesús por todas las edades.", referencia: "Efesios 3:21" },
        { texto: "La bendición, y la gloria y la sabiduría... sean a nuestro Dios.", referencia: "Apocalipsis 7:12" }
    ],
    enojado: [
        { texto: "Si se enojan, no pequen. No dejen que el sol se ponga estando aún enojados.", referencia: "Efesios 4:26" },
        { texto: "El que es lento para la ira tiene grande entendimiento.", referencia: "Proverbios 14:29" },
        { texto: "La blanda respuesta quita la ira; mas la palabra áspera hace subir el furor.", referencia: "Proverbios 15:1" },
        { texto: "Mejor es el que tarda en airarse que el fuerte.", referencia: "Proverbios 16:32" },
        { texto: "Quítense de vosotros toda amargura, enojo, ira, gritería y maledicencia.", referencia: "Efesios 4:31" },
        { texto: "Todo hombre sea pronto para oír, tardo para hablar, tardo para airarse.", referencia: "Santiago 1:19" },
        { texto: "No te apresures en tu espíritu a enojarte; porque el enojo reposa en el seno de los necios.", referencia: "Eclesiastés 7:9" },
        { texto: "La cordura del hombre detiene su furor, y su honra es pasar por alto la ofensa.", referencia: "Proverbios 19:11" },
        { texto: "El necio da rienda suelta a toda su ira, mas el sabio al fin la sosiega.", referencia: "Proverbios 29:11" },
        { texto: "No seas vencido de lo malo, sino vence con el bien el mal.", referencia: "Romanos 12:21" },
        { texto: "Bendecid a los que os persiguen; bendecid, y no maldigáis.", referencia: "Romanos 12:14" },
        { texto: "La ira del hombre no obra la justicia de Dios.", referencia: "Santiago 1:20" },
        { texto: "Ama a tu prójimo como a ti mismo.", referencia: "Mateo 22:39" },
        { texto: "Perdónanos nuestras deudas, como también nosotros perdonamos a nuestros deudores.", referencia: "Mateo 6:12" },
        { texto: "El amor es paciente, es bondadoso; el amor no es envidioso.", referencia: "1 Corintios 13:4" },
        { texto: "No devuelvas a nadie mal por mal; procura lo bueno delante de todos.", referencia: "Romanos 12:17" },
        { texto: "Si tu enemigo tiene hambre, dale de comer; si tiene sed, dale de beber.", referencia: "Romanos 12:20" },
        { texto: "El hombre iracundo levanta contiendas, mas el que tarda en airarse apacigua la rencilla.", referencia: "Proverbios 15:18" },
        { texto: "Cesa de la ira, y deja el furor; no te excites en manera alguna a hacer lo malo.", referencia: "Salmos 37:8" },
        { texto: "El que perdona la ofensa cultiva el amor; el que insiste en ella divide a los amigos.", referencia: "Proverbios 17:9" },
        { texto: "No digas: Yo me vengaré; espera en el Señor, y él te salvará.", referencia: "Proverbios 20:22" },
        { texto: "Deje el impío su camino, y el hombre inicuo sus pensamientos.", referencia: "Isaías 55:7" },
        { texto: "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida.", referencia: "Proverbios 4:23" },
        { texto: "El hombre perverso levanta contienda, y el chismoso aparta a los mejores amigos.", referencia: "Proverbios 16:28" },
        { texto: "Como ciudad derribada y sin muro es el hombre cuyo espíritu no tiene rienda.", referencia: "Proverbios 25:28" },
        { texto: "Vestíos, pues, como escogidos de Dios... de entrañable misericordia, de benignidad.", referencia: "Colosenses 3:12" },
        { texto: "Soportándoos unos a otros, y perdonándoos unos a otros.", referencia: "Colosenses 3:13" },
        { texto: "Y la paz de Dios gobierne en vuestros corazones.", referencia: "Colosenses 3:15" },
        { texto: "El que no ama no ha conocido a Dios; porque Dios es amor.", referencia: "1 Juan 4:8" },
        { texto: "Buscad la paz con todos, y la santidad, sin la cual nadie verá al Señor.", referencia: "Hebreos 12:14" },
        { texto: "La sabiduría que es de lo alto es primeramente pura, después pacífica.", referencia: "Santiago 3:17" },
        { texto: "Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.", referencia: "Mateo 5:9" },
        { texto: "Oísteis que fue dicho: Amarás a tu prójimo... Pero yo os digo: Amad a vuestros enemigos.", referencia: "Mateo 5:43-44" },
        { texto: "Haced todo sin murmuraciones y contiendas.", referencia: "Filipenses 2:14" },
        { texto: "Sea vuestra palabra siempre con gracia, sazonada con sal.", referencia: "Colosenses 4:6" },
        { texto: "Airaos, pero no pequéis; meditad en vuestro corazón estando en vuestra cama, y callad.", referencia: "Salmos 4:4" },
        { texto: "El Señor es lento para la ira y grande en poder.", referencia: "Nahúm 1:3" },
        { texto: "Misericordioso y clemente es el Señor; lento para la ira.", referencia: "Salmos 103:8" },
        { texto: "No te hagas amigo del iracundo, ni andes con el hombre violento.", referencia: "Proverbios 22:24" },
        { texto: "El que justifica al impío, y el que condena al justo, ambos son abominación.", referencia: "Proverbios 17:15" },
        { texto: "El odio despierta rencillas; pero el amor cubrirá todas las faltas.", referencia: "Proverbios 10:12" },
        { texto: "Pleito de hermanos es más fuerte que una ciudad fortificada.", referencia: "Proverbios 18:19" },
        { texto: "La discreción del hombre le hace lento para la ira.", referencia: "Proverbios 19:11" },
        { texto: "No respondas al necio de acuerdo con su necedad, para que no seas tú también como él.", referencia: "Proverbios 26:4" },
        { texto: "Sin leña se apaga el fuego, y donde no hay chismoso, cesa la contienda.", referencia: "Proverbios 26:20" },
        { texto: "El hombre iracundo suscita contiendas, y el furioso muchas veces peca.", referencia: "Proverbios 29:22" },
        { texto: "Seguid la paz con todos.", referencia: "Hebreos 12:14" },
        { texto: "Búscate un corazón humilde y no tendrás ira.", referencia: "Sabiduría 3:1" },
        { texto: "Padre, perdónalos, porque no saben lo que hacen.", referencia: "Lucas 23:34" },
        { texto: "Hijo mío, no te dejes llevar por la ira, que ella mata al necio.", referencia: "Eclesiástico 30:24" }
    ],
    perdido: [
        { texto: "Yo soy el camino, la verdad y la vida.", referencia: "Juan 14:6" },
        { texto: "Confía en el Señor de todo corazón, y no te apoyes en tu propia prudencia.", referencia: "Proverbios 3:5" },
        { texto: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.", referencia: "Salmos 119:105" },
        { texto: "El Señor dice: Yo te instruiré, yo te mostraré el camino que debes seguir.", referencia: "Salmos 32:8" },
        { texto: "Busquen primeramente el reino de Dios y su justicia.", referencia: "Mateo 6:33" },
        { texto: "Reconócelo en todos tus caminos, y él enderezará tus veredas.", referencia: "Proverbios 3:6" },
        { texto: "Encomienda al Señor tu camino, y confía en él; y él hará.", referencia: "Salmos 37:5" },
        { texto: "Jehová es mi pastor; nada me faltará.", referencia: "Salmos 23:1" },
        { texto: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas.", referencia: "Jeremías 33:3" },
        { texto: "Tus oídos oirán a tus espaldas palabra que diga: Este es el camino, andad por él.", referencia: "Isaías 30:21" },
        { texto: "Porque yo sé los pensamientos que tengo acerca de vosotros, pensamientos de paz.", referencia: "Jeremías 29:11" },
        { texto: "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.", referencia: "Mateo 7:7" },
        { texto: "Guíame, oh Señor, en tu justicia, y endereza delante de mí tu camino.", referencia: "Salmos 5:8" },
        { texto: "Mas la senda de los justos es como la luz de la aurora, que va en aumento.", referencia: "Proverbios 4:18" },
        { texto: "Enséñame, oh Señor, tu camino, y guíame por senda de rectitud.", referencia: "Salmos 27:11" },
        { texto: "Tú me guiarás según tu consejo, y después me recibirás en gloria.", referencia: "Salmos 73:24" },
        { texto: "Él me guiará por sendas de justicia por amor de su nombre.", referencia: "Salmos 23:3" },
        { texto: "Pondré mis leyes en su mente, y sobre su corazón las escribiré.", referencia: "Hebreos 8:10" },
        { texto: "Si alguno de vosotros tiene falta de sabiduría, pídala a Dios.", referencia: "Santiago 1:5" },
        { texto: "El que me sigue, no andará en tinieblas, sino que tendrá la luz de la vida.", referencia: "Juan 8:12" },
        { texto: "El Señor guardará tu salida y tu entrada desde ahora y para siempre.", referencia: "Salmos 121:8" },
        { texto: "Enséñame a hacer tu voluntad, porque tú eres mi Dios.", referencia: "Salmos 143:10" },
        { texto: "Abre mis ojos, y miraré las maravillas de tu ley.", referencia: "Salmos 119:18" },
        { texto: "Tu buen espíritu me guíe a tierra de rectitud.", referencia: "Salmos 143:10" },
        { texto: "Jehová te pastoreará siempre, y en las sequías saciará tu alma.", referencia: "Isaías 58:11" },
        { texto: "Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna.", referencia: "Juan 5:39" },
        { texto: "Hazme saber, oh Señor, mi fin, y cuánta sea la medida de mis días.", referencia: "Salmos 39:4" },
        { texto: "Ordena mis pasos con tu palabra, y ninguna iniquidad se enseñoree de mí.", referencia: "Salmos 119:133" },
        { texto: "Muéstrame, oh Señor, tus caminos; enséñame tus sendas.", referencia: "Salmos 25:4" },
        { texto: "Encamíname en tu verdad, y enséñame, porque tú eres el Dios de mi salvación.", referencia: "Salmos 25:5" },
        { texto: "Bueno y recto es el Señor; por tanto, él enseñará a los pecadores el camino.", referencia: "Salmos 25:8" },
        { texto: "Encaminará a los humildes por el juicio, y enseñará a los mansos su carrera.", referencia: "Salmos 25:9" },
        { texto: "¿Quién es el hombre que teme al Señor? Él le enseñará el camino que ha de escoger.", referencia: "Salmos 25:12" },
        { texto: "Mis ojos están siempre hacia el Señor, porque él sacará mis pies de la red.", referencia: "Salmos 25:15" },
        { texto: "Jehová es mi luz y mi salvación; ¿de quién temeré?", referencia: "Salmos 27:1" },
        { texto: "Yo iré delante de ti, y enderezaré los lugares torcidos.", referencia: "Isaías 45:2" },
        { texto: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento.", referencia: "Romanos 12:2" },
        { texto: "Para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta.", referencia: "Romanos 12:2" },
        { texto: "Y el Señor os guíe los corazones al amor de Dios.", referencia: "2 Tesalonicenses 3:5" },
        { texto: "Porque este Dios es Dios nuestro eternamente y para siempre; él nos guiará aun más allá de la muerte.", referencia: "Salmos 48:14" },
        { texto: "El corazón del hombre piensa su camino; mas el Señor endereza sus pasos.", referencia: "Proverbios 16:9" },
        { texto: "Hay camino que al hombre le parece derecho; pero su fin es camino de muerte.", referencia: "Proverbios 14:12" },
        { texto: "Los pasos del hombre son ordenados por el Señor.", referencia: "Salmos 37:23" },
        { texto: "Ciertamente el bien y la misericordia me seguirán todos los días de mi vida.", referencia: "Salmos 23:6" },
        { texto: "Encamíname por la senda de tus mandamientos, porque en ella tengo mi voluntad.", referencia: "Salmos 119:35" },
        { texto: "Inclina mi corazón a tus testimonios, y no a la avaricia.", referencia: "Salmos 119:36" },
        { texto: "Aparta mis ojos, que no vean la vanidad; avívame en tu camino.", referencia: "Salmos 119:37" },
        { texto: "Sea tu misericordia para consolarme, conforme a lo que has dicho a tu siervo.", referencia: "Salmos 119:76" },
        { texto: "Vengan a mí tus misericordias, para que viva, porque tu ley es mi delicia.", referencia: "Salmos 119:77" },
        { texto: "Echa tu pan sobre las aguas; porque después de muchos días lo hallarás.", referencia: "Eclesiastés 11:1" }
    ],
   cansado: [
        { texto: "Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso.", referencia: "Mateo 11:28" },
        { texto: "El da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.", referencia: "Isaías 40:29" },
        { texto: "Los que esperan en el Señor tendrán nuevas fuerzas; levantarán alas como las águilas.", referencia: "Isaías 40:31" },
        { texto: "Mi gracia te basta, porque mi poder se perfecciona en la debilidad.", referencia: "2 Corintios 12:9" },
        { texto: "Dios es nuestro refugio y fortaleza, nuestro pronto auxilio en las tribulaciones.", referencia: "Salmos 46:1" },
        { texto: "En paz me acostaré, y asimismo dormiré; porque solo tú, Señor, me haces vivir confiado.", referencia: "Salmos 4:8" },
        { texto: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos.", referencia: "Gálatas 6:9" },
        { texto: "Todo lo puedo en Cristo que me fortalece.", referencia: "Filipenses 4:13" },
        { texto: "Echa sobre el Señor tu carga, y él te sustentará.", referencia: "Salmos 55:22" },
        { texto: "Mi alma tiene sed de Dios, del Dios vivo.", referencia: "Salmos 42:2" },
        { texto: "El Señor es la fortaleza de mi vida.", referencia: "Salmos 27:1" },
        { texto: "Fortaleced las manos cansadas, afirmad las rodillas endebles.", referencia: "Isaías 35:3" },
        { texto: "Jehová te pastoreará siempre, y saciará tu alma en las sequías.", referencia: "Isaías 58:11" },
        { texto: "Yo me acosté y dormí, y desperté, porque el Señor me sustentaba.", referencia: "Salmos 3:5" },
        { texto: "Venid vosotros aparte a un lugar desierto, y descansad un poco.", referencia: "Marcos 6:31" },
        { texto: "Por demás es que madruguéis y vayáis tarde a reposar... pues que a su amado dará Dios el sueño.", referencia: "Salmos 127:2" },
        { texto: "Vuelve, oh alma mía, a tu reposo, porque el Señor te ha hecho bien.", referencia: "Salmos 116:7" },
        { texto: "Alma mía, en Dios solamente reposa, porque de él es mi esperanza.", referencia: "Salmos 62:5" },
        { texto: "Llevad mi yugo sobre vosotros, y aprended de mí, que soy manso y humilde de corazón.", referencia: "Mateo 11:29" },
        { texto: "Porque mi yugo es fácil, y ligera mi carga.", referencia: "Mateo 11:30" },
        { texto: "Levántate, come, porque largo camino te resta.", referencia: "1 Reyes 19:7" },
        { texto: "En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará.", referencia: "Salmos 23:2" },
        { texto: "Confortará mi alma; me guiará por sendas de justicia por amor de su nombre.", referencia: "Salmos 23:3" },
        { texto: "El que tiene sed, venga; y el que quiera, tome del agua de la vida gratuitamente.", referencia: "Apocalipsis 22:17" },
        { texto: "El que bebiere del agua que yo le daré, no tendrá sed jamás.", referencia: "Juan 4:14" },
        { texto: "Si alguno tiene sed, venga a mí y beba.", referencia: "Juan 7:37" },
        { texto: "No temas, porque yo estoy contigo; yo soy tu Dios que te esfuerzo.", referencia: "Isaías 41:10" },
        { texto: "Dios es el que me ciñe de poder, y quien hace perfecto mi camino.", referencia: "Salmos 18:32" },
        { texto: "Hiciste descender abundante lluvia, oh Dios, a tu heredad agotada.", referencia: "Salmos 68:9" },
        { texto: "El Dios de Israel, él da fuerza y vigor a su pueblo. Bendito sea Dios.", referencia: "Salmos 68:35" },
        { texto: "Y vosotros, hermanos, no os canséis de hacer bien.", referencia: "2 Tesalonicenses 3:13" },
        { texto: "Considerad a aquel que sufrió tal contradicción de pecadores... para que vuestro ánimo no se canse.", referencia: "Hebreos 12:3" },
        { texto: "Por lo cual, levantad las manos caídas y las rodillas paralizadas.", referencia: "Hebreos 12:12" },
        { texto: "Guarda silencio ante el Señor, y espera en él.", referencia: "Salmos 37:7" },
        { texto: "En Dios solamente está acallada mi alma; de él viene mi salvación.", referencia: "Salmos 62:1" },
        { texto: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.", referencia: "Salmos 91:1" },
        { texto: "En descanso y en reposo seréis salvos; en quietud y en confianza será vuestra fortaleza.", referencia: "Isaías 30:15" },
        { texto: "Porque yo derramaré aguas sobre el sequedal, y ríos sobre la tierra árida.", referencia: "Isaías 44:3" },
        { texto: "Porque satisfaré al alma cansada, y saciaré a toda alma afligida.", referencia: "Jeremías 31:25" },
        { texto: "Tú eres mi refugio y mi escudo; en tu palabra he esperado.", referencia: "Salmos 119:114" },
        { texto: "Aflicción y angustia se han apoderado de mí, mas tus mandamientos fueron mi delicia.", referencia: "Salmos 119:143" },
        { texto: "Hazme oír por la mañana tu misericordia, porque en ti he confiado.", referencia: "Salmos 143:8" },
        { texto: "Sostiene el Señor a todos los que caen, y levanta a todos los oprimidos.", referencia: "Salmos 145:14" },
        { texto: "Él sana a los quebrantados de corazón, y venda sus heridas.", referencia: "Salmos 147:3" },
        { texto: "Mas el Dios de toda gracia... después que hayáis padecido un poco de tiempo, él mismo os perfeccione.", referencia: "1 Pedro 5:10" },
        { texto: "Mi presencia irá contigo, y te daré descanso.", referencia: "Éxodo 33:14" },
        { texto: "Como tus días serán tus fuerzas.", referencia: "Deuteronomio 33:25" },
        { texto: "No os entristezcáis, porque el gozo del Señor es vuestra fuerza.", referencia: "Nehemías 8:10" },
        { texto: "Cuando te acuestes, no tendrás temor, sino que te acostarás, y tu sueño será grato.", referencia: "Proverbios 3:24" },
        { texto: "El Señor es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado.", referencia: "Salmos 28:7" }
    ],
    esperanza: [
        { texto: "Porque yo sé los pensamientos que tengo acerca de vosotros... para daros el fin que esperáis.", referencia: "Jeremías 29:11" },
        { texto: "Y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones.", referencia: "Romanos 5:5" },
        { texto: "Ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor.", referencia: "1 Corintios 13:13" },
        { texto: "Porque en esperanza fuimos salvos; pero la esperanza que se ve, no es esperanza.", referencia: "Romanos 8:24" },
        { texto: "Mantengamos firme, sin fluctuar, la profesión de nuestra esperanza.", referencia: "Hebreos 10:23" },
        { texto: "Alma mía, en Dios solamente reposa, porque de él es mi esperanza.", referencia: "Salmos 62:5" },
        { texto: "El Señor es mi porción... por tanto, en él esperaré.", referencia: "Lamentaciones 3:24" },
        { texto: "Mas yo siempre esperaré, y te alabaré más y más.", referencia: "Salmos 71:14" },
        { texto: "Bienaventurado aquel cuyo ayudador es el Dios de Jacob, cuya esperanza está en el Señor.", referencia: "Salmos 146:5" },
        { texto: "Esta esperanza tenemos como ancla del alma, segura y firme.", referencia: "Hebreos 6:19" },
        { texto: "Espera en el Señor; ten valor, cobra ánimo; espera en el Señor.", referencia: "Salmos 27:14" },
        { texto: "El Dios de esperanza os llene de todo gozo y paz en el creer.", referencia: "Romanos 15:13" },
        { texto: "Los que esperan al Señor no serán avergonzados.", referencia: "Isaías 49:23" },
        { texto: "Bendito el varón que confía en el Señor, y cuya confianza es el Señor.", referencia: "Jeremías 17:7" },
        { texto: "Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro? Mi socorro viene del Señor.", referencia: "Salmos 121:1-2" },
        { texto: "Gozosos en la esperanza; sufridos en la tribulación; constantes en la oración.", referencia: "Romanos 12:12" },
        { texto: "Cristo en vosotros, la esperanza de gloria.", referencia: "Colosenses 1:27" },
        { texto: "Nos hizo renacer para una esperanza viva, por la resurrección de Jesucristo.", referencia: "1 Pedro 1:3" },
        { texto: "Ceñid los lomos de vuestro entendimiento... esperad por completo en la gracia.", referencia: "1 Pedro 1:13" },
        { texto: "En la esperanza de la vida eterna, la cual Dios prometió desde antes de los siglos.", referencia: "Titus 1:2" },
        { texto: "Aguardando la esperanza bienaventurada y la manifestación gloriosa de nuestro gran Dios.", referencia: "Titus 2:13" },
        { texto: "Para que justificados por su gracia, viniésemos a ser herederos según la esperanza.", referencia: "Titus 3:7" },
        { texto: "Acordándonos sin cesar... de vuestra constancia en la esperanza.", referencia: "1 Tesalonicenses 1:3" },
        { texto: "Habiéndonos vestido con la coraza de fe y de amor, y con la esperanza de salvación.", referencia: "1 Tesalonicenses 5:8" },
        { texto: "Esforzaos todos vosotros los que esperáis en el Señor, y tome aliento vuestro corazón.", referencia: "Salmos 31:24" },
        { texto: "He aquí el ojo del Señor sobre los que le temen, sobre los que esperan en su misericordia.", referencia: "Salmos 33:18" },
        { texto: "Sea tu misericordia, oh Señor, sobre nosotros, según esperamos en ti.", referencia: "Salmos 33:22" },
        { texto: "Y ahora, Señor, ¿qué esperaré? Mi esperanza está en ti.", referencia: "Salmos 39:7" },
        { texto: "¿Por qué te abates, oh alma mía? Espera en Dios, porque aún he de alabarle.", referencia: "Salmos 42:11" },
        { texto: "Acuérdate de la palabra dada a tu siervo, en la cual me has hecho esperar.", referencia: "Salmos 119:49" },
        { texto: "Desfallece mi alma por tu salvación, mas espero en tu palabra.", referencia: "Salmos 119:81" },
        { texto: "Mi escondedero y mi escudo eres tú; en tu palabra he esperado.", referencia: "Salmos 119:114" },
        { texto: "Susténtame conforme a tu palabra, y viviré; y no quedé yo avergonzado de mi esperanza.", referencia: "Salmos 119:116" },
        { texto: "Esperé yo al Señor, esperó mi alma; en su palabra he esperado.", referencia: "Salmos 130:5" },
        { texto: "Espere Israel al Señor, porque en el Señor hay misericordia.", referencia: "Salmos 130:7" },
        { texto: "Se complace el Señor en los que le temen, y en los que esperan en su misericordia.", referencia: "Salmos 147:11" },
        { texto: "La esperanza de los justos es alegría; mas la esperanza de los impíos perecerá.", referencia: "Proverbios 10:28" },
        { texto: "La esperanza que se demora es tormento del corazón; pero árbol de vida es el deseo cumplido.", referencia: "Proverbios 13:12" },
        { texto: "Por su maldad será lanzado el impío; mas el justo en su muerte tiene esperanza.", referencia: "Proverbios 14:32" },
        { texto: "Ciertamente hay fin, y tu esperanza no será cortada.", referencia: "Proverbios 23:18" },
        { texto: "Así será a tu alma el conocimiento de la sabiduría... y tu esperanza no será cortada.", referencia: "Proverbios 24:14" },
        { texto: "Pero los que esperan al Señor tendrán nuevas fuerzas.", referencia: "Isaías 40:31" },
        { texto: "Esto recapacitaré en mi corazón, por lo cual tendré esperanza.", referencia: "Lamentaciones 3:21" },
        { texto: "Bueno es esperar en silencio la salvación del Señor.", referencia: "Lamentaciones 3:26" },
        { texto: "Mas yo al Señor miraré, esperaré al Dios de mi salvación; el Dios mío me oirá.", referencia: "Micah 7:7" },
        { texto: "Volveos a la fortaleza, oh prisioneros de esperanza.", referencia: "Zacarías 9:12" },
        { texto: "Él creyó en esperanza contra esperanza, para llegar a ser padre de muchas gentes.", referencia: "Romanos 4:18" },
        { texto: "Pero si esperamos lo que no vemos, con paciencia lo aguardamos.", referencia: "Romanos 8:25" },
        { texto: "Para que por la paciencia y la consolación de las Escrituras, tengamos esperanza.", referencia: "Romanos 15:4" },
        { texto: "Pues nosotros por el Espíritu aguardamos por fe la esperanza de la justicia.", referencia: "Gálatas 5:5" }
    ],
   culpa: [
        { texto: "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados.", referencia: "1 Juan 1:9" },
        { texto: "Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús.", referencia: "Romanos 8:1" },
        { texto: "Si vuestros pecados fueren como la grana, como la nieve serán emblanquecidos.", referencia: "Isaías 1:18" },
        { texto: "Yo soy el que borro tus rebeliones por amor de mí mismo, y no me acordaré de tus pecados.", referencia: "Isaías 43:25" },
        { texto: "Cuanto está lejos el oriente del occidente, hizo alejar de nosotros nuestras rebeliones.", referencia: "Salmos 103:12" },
        { texto: "Bienaventurado aquel cuya transgresión ha sido perdonada, y cubierto su pecado.", referencia: "Salmos 32:1" },
        { texto: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito.", referencia: "Juan 3:16" },
        { texto: "Él herido fue por nuestras rebeliones, molido por nuestros pecados.", referencia: "Isaías 53:5" },
        { texto: "Dios, ten misericordia de mí, pecador.", referencia: "Lucas 18:13" },
        { texto: "La sangre de Jesucristo su Hijo nos limpia de todo pecado.", referencia: "1 Juan 1:7" },
        { texto: "Padre, perdónalos, porque no saben lo que hacen.", referencia: "Lucas 23:34" },
        { texto: "Perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo.", referencia: "Efesios 4:32" },
        { texto: "El que confiesa sus pecados y se aparta alcanzará misericordia.", referencia: "Proverbios 28:13" },
        { texto: "Misericordioso y clemente es el Señor; lento para la ira, y grande en misericordia.", referencia: "Salmos 103:8" },
        { texto: "No he venido a llamar a justos, sino a pecadores al arrepentimiento.", referencia: "Lucas 5:32" },
        { texto: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.", referencia: "Salmos 51:10" },
        { texto: "Ten piedad de mí, oh Dios, conforme a tu misericordia.", referencia: "Salmos 51:1" },
        { texto: "Lávame más y más de mi maldad, y límpiame de mi pecado.", referencia: "Salmos 51:2" },
        { texto: "A ti, a ti solo he pecado, y he hecho lo malo delante de tus ojos.", referencia: "Salmos 51:4" },
        { texto: "Purifícame con hisopo, y seré limpio; lávame, y seré más blanco que la nieve.", referencia: "Salmos 51:7" },
        { texto: "Esconde tu rostro de mis pecados, y borra todas mis maldades.", referencia: "Salmos 51:9" },
        { texto: "Los sacrificios de Dios son el espíritu quebrantado; al corazón contrito no despreciarás tú.", referencia: "Salmos 51:17" },
        { texto: "Él volverá a tener misericordia de nosotros; sepultará nuestras iniquidades.", referencia: "Miqueas 7:19" },
        { texto: "Deje el impío su camino... y vuélvase al Señor, el cual tendrá de él misericordia.", referencia: "Isaías 55:7" },
        { texto: "No nos ha tratado conforme a nuestras iniquidades, ni pagado conforme a nuestros pecados.", referencia: "Salmos 103:10" },
        { texto: "Vete, y no peques más.", referencia: "Juan 8:11" },
        { texto: "Hijo, tus pecados te son perdonados.", referencia: "Marcos 2:5" },
        { texto: "Porque tú, Señor, eres bueno y perdonador, y grande en misericordia.", referencia: "Salmos 86:5" },
        { texto: "Justificados, pues, por la fe, tenemos paz para con Dios.", referencia: "Romanos 5:1" },
        { texto: "Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros.", referencia: "Romanos 5:8" },
        { texto: "Donde el pecado abundó, sobreabundó la gracia.", referencia: "Romanos 5:20" },
        { texto: "Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna.", referencia: "Romanos 6:23" },
        { texto: "Cristo Jesús vino al mundo para salvar a los pecadores.", referencia: "1 Timoteo 1:15" },
        { texto: "En quien tenemos redención por su sangre, el perdón de pecados.", referencia: "Efesios 1:7" },
        { texto: "Él nos libró de la potestad de las tinieblas... en quien tenemos perdón de pecados.", referencia: "Colosenses 1:13-14" },
        { texto: "Y vuestros pecados os son perdonados por su nombre.", referencia: "1 Juan 2:12" },
        { texto: "Aquel que nos amó, y nos lavó de nuestros pecados con su sangre.", referencia: "Apocalipsis 1:5" },
        { texto: "Venid luego, dice el Señor, y estemos a cuenta.", referencia: "Isaías 1:18" },
        { texto: "Me levantaré e iré a mi padre, y le diré: Padre, he pecado contra el cielo y contra ti.", referencia: "Lucas 15:18" },
        { texto: "Y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió.", referencia: "Lucas 15:20" },
        { texto: "Sacad el mejor vestido, y vestidle; y poned un anillo en su mano.", referencia: "Lucas 15:22" },
        { texto: "Porque este mi hijo muerto era, y ha revivido; se había perdido, y es hallado.", referencia: "Lucas 15:24" },
        { texto: "Digo que así habrá más gozo en el cielo por un pecador que se arrepiente.", referencia: "Lucas 15:7" },
        { texto: "Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido.", referencia: "Lucas 19:10" },
        { texto: "A quien mucho se le perdona, mucho ama.", referencia: "Lucas 7:47" },
        { texto: "Tu fe te ha salvado, ve en paz.", referencia: "Lucas 7:50" },
        { texto: "No he venido a llamar a justos, sino a pecadores.", referencia: "Mateo 9:13" },
        { texto: "Él es la propiciación por nuestros pecados.", referencia: "1 Juan 2:2" },
        { texto: "Si nuestro corazón nos reprende, mayor que nuestro corazón es Dios.", referencia: "1 Juan 3:20" },
        { texto: "Misericordia quiero, y no sacrificio.", referencia: "Oseas 6:6" }
    ],
    amado: [
        { texto: "Con amor eterno te he amado; por tanto, te prolongué mi misericordia.", referencia: "Jeremías 31:3" },
        { texto: "Nosotros le amamos a él, porque él nos amó primero.", referencia: "1 Juan 4:19" },
        { texto: "Nadie tiene mayor amor que este, que uno ponga su vida por sus amigos.", referencia: "Juan 15:13" },
        { texto: "Mirad cuál amor nos ha dado el Padre, para que seamos llamados hijos de Dios.", referencia: "1 Juan 3:1" },
        { texto: "El amor es paciente, es bondadoso; el amor no es envidioso ni jactancioso.", referencia: "1 Corintios 13:4" },
        { texto: "Ni la muerte, ni la vida podrán separarnos del amor de Dios.", referencia: "Romanos 8:38-39" },
        { texto: "Amados, amémonos unos a otros; porque el amor es de Dios.", referencia: "1 Juan 4:7" },
        { texto: "El Señor tu Dios está en medio de ti; se gozará sobre ti con alegría.", referencia: "Sofonías 3:17" },
        { texto: "Porque el Padre mismo os ama, pues vosotros me habéis amado.", referencia: "Juan 16:27" },
        { texto: "En esto consiste el amor: no en que nosotros hayamos amado a Dios, sino en que él nos amó a nosotros.", referencia: "1 Juan 4:10" },
        { texto: "El que no ama, no ha conocido a Dios; porque Dios es amor.", referencia: "1 Juan 4:8" },
        { texto: "Si Dios es por nosotros, ¿quién contra nosotros?", referencia: "Romanos 8:31" },
        { texto: "El que no escatimó ni a su propio Hijo... ¿cómo no nos dará también con él todas las cosas?", referencia: "Romanos 8:32" },
        { texto: "Antes, en todas estas cosas somos más que vencedores por medio de aquel que nos amó.", referencia: "Romanos 8:37" },
        { texto: "Como el Padre me ha amado, así también yo os he amado; permaneced en mi amor.", referencia: "Juan 15:9" },
        { texto: "Este es mi mandamiento: Que os améis unos a otros, como yo os he amado.", referencia: "Juan 15:12" },
        { texto: "Ya no os llamaré siervos... sino que os he llamado amigos.", referencia: "Juan 15:15" },
        { texto: "No me elegisteis vosotros a mí, sino que yo os elegí a vosotros.", referencia: "Juan 15:16" },
        { texto: "Pero Dios, que es rico en misericordia, por su gran amor con que nos amó.", referencia: "Efesios 2:4" },
        { texto: "Para que Cristo habite por la fe en vuestros corazones... cimentados en amor.", referencia: "Efesios 3:17" },
        { texto: "Y de conocer el amor de Cristo, que excede a todo conocimiento.", referencia: "Efesios 3:19" },
        { texto: "Andad en amor, como también Cristo nos amó, y se entregó a sí mismo por nosotros.", referencia: "Efesios 5:2" },
        { texto: "El Señor se manifestó a mí hace ya mucho tiempo, diciendo: Con amor eterno te he amado.", referencia: "Jeremías 31:3" },
        { texto: "Tú fuiste precioso ante mis ojos, digno de honra, y yo te amé.", referencia: "Isaías 43:4" },
        { texto: "Aun las mujeres se olvidarán de lo que dieron a luz... pero yo nunca me olvidaré de ti.", referencia: "Isaías 49:15" },
        { texto: "He aquí que en las palmas de las manos te tengo esculpida.", referencia: "Isaías 49:16" },
        { texto: "Porque los montes se moverán... pero no se apartará de ti mi misericordia.", referencia: "Isaías 54:10" },
        { texto: "Jehová se ha manifestado a mí... con amor eterno te he amado.", referencia: "Jeremías 31:3" },
        { texto: "El Señor tu Dios... callará de amor, se regocijará sobre ti con cánticos.", referencia: "Sofonías 3:17" },
        { texto: "Amados, si Dios nos ha amado así, debemos también nosotros amarnos unos a otros.", referencia: "1 Juan 4:11" },
        { texto: "Nosotros hemos conocido y creído el amor que Dios tiene para con nosotros.", referencia: "1 Juan 4:16" },
        { texto: "En el amor no hay temor, sino que el perfecto amor echa fuera el temor.", referencia: "1 Juan 4:18" },
        { texto: "Sabemos que hemos pasado de muerte a vida, en que amamos a los hermanos.", referencia: "1 Juan 3:14" },
        { texto: "Hijitos míos, no amemos de palabra ni de lengua, sino de hecho y en verdad.", referencia: "1 Juan 3:18" },
        { texto: "Amado, yo deseo que tú seas prosperado en todas las cosas, y que tengas salud.", referencia: "3 Juan 1:2" },
        { texto: "La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con vosotros.", referencia: "2 Corintios 13:14" },
        { texto: "Porque el amor de Cristo nos constriñe.", referencia: "2 Corintios 5:14" },
        { texto: "Y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones.", referencia: "Romanos 5:5" },
        { texto: "Pero en todas estas cosas somos más que vencedores por medio de aquel que nos amó.", referencia: "Romanos 8:37" },
        { texto: "Para que seáis plenamente capaces de comprender... cuál sea la anchura, la longitud, la profundidad y la altura del amor de Dios.", referencia: "Efesios 3:18" },
        { texto: "Bendito sea el Dios y Padre... que según su grande misericordia nos hizo renacer.", referencia: "1 Pedro 1:3" },
        { texto: "Habiendo purificado vuestras almas por la obediencia a la verdad... amaos unos a otros entrañablemente.", referencia: "1 Pedro 1:22" },
        { texto: "Poned vuestra esperanza por completo en la gracia que se os traerá.", referencia: "1 Pedro 1:13" },
        { texto: "Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios.", referencia: "1 Pedro 2:9" },
        { texto: "Vosotros que en otro tiempo no erais pueblo, pero que ahora sois pueblo de Dios.", referencia: "1 Pedro 2:10" },
        { texto: "Humillaos, pues, bajo la poderosa mano de Dios... echando toda vuestra ansiedad sobre él.", referencia: "1 Pedro 5:6-7" },
        { texto: "Porque él tiene cuidado de vosotros.", referencia: "1 Pedro 5:7" },
        { texto: "La paz sea con todos vosotros los que estáis en Jesucristo. Amén.", referencia: "1 Pedro 5:14" },
        { texto: "Yo amo a los que me aman, y me hallan los que temprano me buscan.", referencia: "Proverbios 8:17" },
        { texto: "Ponme como un sello sobre tu corazón, como una marca sobre tu brazo; porque fuerte es como la muerte el amor.", referencia: "Cantares 8:6" }
    ]
};

// Versículos del día aleatorios
const versiculosDiarios = [
    { texto: "Todo lo puedo en Cristo que me fortalece.", referencia: "Filipenses 4:13" },
    { texto: "El Señor es mi pastor, nada me faltará.", referencia: "Salmos 23:1" },
    { texto: "Confía en el Señor con todo tu corazón.", referencia: "Proverbios 3:5" },
    { texto: "Dios es nuestro refugio y fortaleza.", referencia: "Salmos 46:1" },
    { texto: "Yo soy el camino, la verdad y la vida.", referencia: "Juan 14:6" },
    { texto: "Alégrense siempre en el Señor. Insisto: ¡Alégrense!", referencia: "Filipenses 4:4" },
    { texto: "El gozo del Señor es nuestra fortaleza.", referencia: "Nehemías 8:10" },
    { texto: "Los que esperan en el Señor tendrán nuevas fuerzas.", referencia: "Isaías 40:31" },
    { texto: "No temas, porque yo estoy contigo.", referencia: "Isaías 41:10" },
    { texto: "Este es el día que hizo el Señor; regocijémonos.", referencia: "Salmos 118:24" },
    { texto: "Bajo el manto de la Virgen del Carmen encontramos refugio.", referencia: "Tradición Carmelita" },
    { texto: "María, Madre nuestra, intercede por nosotros.", referencia: "Oración Carmelita" }
];

// Variables globales
let emocionActual = null;
let indiceActual = 0;
let versiculoActual = null;

// ================================
// Funciones principales
// ================================

function showVerse(emotion) {
    emocionActual = emotion;
    
    const versiculosEmocion = versiculos[emotion];
    indiceActual = Math.floor(Math.random() * versiculosEmocion.length);
    versiculoActual = versiculosEmocion[indiceActual];
    
    const titulos = {
        triste: "Cuando estás triste...",
        alegre: "¡Celebra tu alegría!",
        ansioso: "Para tu ansiedad...",
        solo: "Nunca estás solo/a...",
        miedo: "No tengas miedo...",
        enojado: "Para calmar tu corazón...",
        agradecido: "¡Gracias a Dios!",
        perdido: "Encuentra tu camino...",
        cansado: "Descansa en el Señor...",
        esperanza: "Mantén la esperanza...",
        culpa: "Dios te perdona...",
        amado: "Eres muy amado/a..."
    };
    
    document.getElementById('emotion-title').textContent = titulos[emotion];
    document.getElementById('verse-text').textContent = `"${versiculoActual.texto}"`;
    document.getElementById('verse-reference').textContent = versiculoActual.referencia;
    document.getElementById('verse-counter').textContent = `${indiceActual + 1} de ${versiculosEmocion.length} versículos`;
    
    document.getElementById('verse-container').classList.remove('d-none');
    const hint = document.getElementById('emotion-hint');
    if (hint) {
        hint.classList.add('d-none');
    }
    
    // Animación
    const container = document.getElementById('verse-container');
    container.style.animation = 'none';
    container.offsetHeight;
    container.style.animation = 'fade-in-up 0.6s ease-out';
    
    // Actualizar botones activos
    document.querySelectorAll('.emotion-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-emotion="${emotion}"]`).classList.add('active');
    
    // Scroll suave
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showRandomVerse() {
    const emociones = Object.keys(versiculos);
    const randomEmotion = emociones[Math.floor(Math.random() * emociones.length)];
    showVerse(randomEmotion);
}

function resetSelection() {
    emocionActual = null;
    indiceActual = 0;
    versiculoActual = null;

    document.querySelectorAll('.emotion-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const verseContainer = document.getElementById('verse-container');
    verseContainer.classList.add('d-none');

    const hint = document.getElementById('emotion-hint');
    if (hint) {
        hint.classList.remove('d-none');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAnotherVerse() {
    if (!emocionActual) return;
    
    const versiculosEmocion = versiculos[emocionActual];
    let nuevoIndice;
    
    if (versiculosEmocion.length > 1) {
        do {
            nuevoIndice = Math.floor(Math.random() * versiculosEmocion.length);
        } while (nuevoIndice === indiceActual);
        indiceActual = nuevoIndice;
    }
    
    versiculoActual = versiculosEmocion[indiceActual];
    
    const verseText = document.getElementById('verse-text');
    const verseRef = document.getElementById('verse-reference');
    const verseCounter = document.getElementById('verse-counter');
    
    // Animación de salida
    verseText.style.opacity = '0';
    verseText.style.transform = 'translateY(20px)';
    verseRef.style.opacity = '0';
    
    setTimeout(() => {
        verseText.textContent = `"${versiculoActual.texto}"`;
        verseRef.textContent = versiculoActual.referencia;
        
        // Animación de entrada
        verseText.style.opacity = '1';
        verseText.style.transform = 'translateY(0)';
        verseRef.style.opacity = '1';
    }, 300);
}

function shareVerse() {
    if (!versiculoActual) return;
    
    const textoCompartir = `"${versiculoActual.texto}" - ${versiculoActual.referencia}\n\n✨ ELEOS - Grupo Juvenil Virgen del Carmen`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Versículo de ELEOS',
            text: textoCompartir
        }).catch(() => {
            copyToClipboard(textoCompartir);
        });
    } else {
        copyToClipboard(textoCompartir);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    }).catch(() => {
        // Fallback para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast();
    });
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

function setDailyVerse() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const index = dayOfYear % versiculosDiarios.length;
    const dailyVerse = versiculosDiarios[index];

    const hint = document.getElementById('emotion-hint');
    if (hint) {
        hint.innerHTML = `<p><i class="bi bi-sparkles me-2"></i>Versículo del día: "${dailyVerse.texto}" <strong>- ${dailyVerse.referencia}</strong></p>`;
    }
}

// ================================
// Inicialización
// ================================

document.addEventListener('DOMContentLoaded', function() {
    // Configurar transiciones para los textos
    const verseText = document.getElementById('verse-text');
    const verseRef = document.getElementById('verse-reference');
    
    if (verseText) {
        verseText.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }
    if (verseRef) {
        verseRef.style.transition = 'opacity 0.3s ease';
    }
    
    // Animación de entrada para los botones
    const buttons = document.querySelectorAll('.emotion-btn');
    buttons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(30px)';
        setTimeout(() => {
            btn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 100 + (index * 60));
    });
    
    // Establecer versículo del día
    setDailyVerse();
    
    console.log('✨ ELEOS - Grupo Juvenil Virgen del Carmen - Cargado');
});
