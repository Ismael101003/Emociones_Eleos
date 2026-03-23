// ================================
// Base de datos de versículos bíblicos por emoción
// ================================

const versiculos = {
    triste: [
        {
            texto: "El Señor está cerca de los quebrantados de corazón, y salva a los de espíritu abatido.",
            referencia: "Salmos 34:18"
        },
        {
            texto: "Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso.",
            referencia: "Mateo 11:28"
        },
        {
            texto: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.",
            referencia: "Salmos 46:1"
        },
        {
            texto: "Los que sembraron con lágrimas, con regocijo segarán.",
            referencia: "Salmos 126:5"
        },
        {
            texto: "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor.",
            referencia: "Apocalipsis 21:4"
        }
    ],
    alegre: [
        {
            texto: "Este es el día que hizo el Señor; nos gozaremos y alegraremos en él.",
            referencia: "Salmos 118:24"
        },
        {
            texto: "Alégrense siempre en el Señor. Insisto: ¡Alégrense!",
            referencia: "Filipenses 4:4"
        },
        {
            texto: "El gozo del Señor es nuestra fortaleza.",
            referencia: "Nehemías 8:10"
        },
        {
            texto: "Canten al Señor un cántico nuevo, porque ha hecho maravillas.",
            referencia: "Salmos 98:1"
        },
        {
            texto: "Den gracias al Señor, porque él es bueno; su gran amor perdura para siempre.",
            referencia: "Salmos 107:1"
        }
    ],
    ansioso: [
        {
            texto: "No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios.",
            referencia: "Filipenses 4:6"
        },
        {
            texto: "Depositen en él toda ansiedad, porque él cuida de ustedes.",
            referencia: "1 Pedro 5:7"
        },
        {
            texto: "La paz les dejo; mi paz les doy. No se angustien ni se acobarden.",
            referencia: "Juan 14:27"
        },
        {
            texto: "Cuando siento miedo, pongo en ti mi confianza.",
            referencia: "Salmos 56:3"
        },
        {
            texto: "Jehová peleará por vosotros, y vosotros estaréis tranquilos.",
            referencia: "Éxodo 14:14"
        }
    ],
    solo: [
        {
            texto: "No te desampararé, ni te dejaré.",
            referencia: "Hebreos 13:5"
        },
        {
            texto: "Aunque mi padre y mi madre me abandonen, el Señor me recibirá en sus brazos.",
            referencia: "Salmos 27:10"
        },
        {
            texto: "Yo estoy con ustedes todos los días, hasta el fin del mundo.",
            referencia: "Mateo 28:20"
        },
        {
            texto: "El Señor mismo marchará al frente de ti y estará contigo; nunca te dejará ni te abandonará.",
            referencia: "Deuteronomio 31:8"
        },
        {
            texto: "¿A dónde podría alejarme de tu Espíritu? ¿A dónde podría huir de tu presencia?",
            referencia: "Salmos 139:7"
        }
    ],
    miedo: [
        {
            texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo.",
            referencia: "Isaías 41:10"
        },
        {
            texto: "Dios no nos ha dado un espíritu de temor, sino de poder, de amor y de dominio propio.",
            referencia: "2 Timoteo 1:7"
        },
        {
            texto: "El Señor es mi luz y mi salvación; ¿a quién temeré?",
            referencia: "Salmos 27:1"
        },
        {
            texto: "Aunque pase por el valle de sombra de muerte, no temeré mal alguno, porque tú estás conmigo.",
            referencia: "Salmos 23:4"
        },
        {
            texto: "En el amor no hay temor, sino que el perfecto amor echa fuera el temor.",
            referencia: "1 Juan 4:18"
        }
    ],
    agradecido: [
        {
            texto: "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros.",
            referencia: "1 Tesalonicenses 5:18"
        },
        {
            texto: "Alaba, alma mía, al Señor, y no olvides ninguno de sus beneficios.",
            referencia: "Salmos 103:2"
        },
        {
            texto: "Toda buena dádiva y todo don perfecto desciende de lo alto, del Padre de las luces.",
            referencia: "Santiago 1:17"
        },
        {
            texto: "Den gracias al Señor, invoquen su nombre; den a conocer sus obras entre las naciones.",
            referencia: "1 Crónicas 16:8"
        },
        {
            texto: "Grande es el Señor, y digno de toda alabanza; su grandeza es insondable.",
            referencia: "Salmos 145:3"
        }
    ],
    enojado: [
        {
            texto: "Si se enojan, no pequen. No dejen que el sol se ponga estando aún enojados.",
            referencia: "Efesios 4:26"
        },
        {
            texto: "El que es lento para la ira tiene grande entendimiento.",
            referencia: "Proverbios 14:29"
        },
        {
            texto: "La blanda respuesta quita la ira; mas la palabra áspera hace subir el furor.",
            referencia: "Proverbios 15:1"
        },
        {
            texto: "Mejor es el que tarda en airarse que el fuerte; y el que se enseñorea de su espíritu, que el que toma una ciudad.",
            referencia: "Proverbios 16:32"
        },
        {
            texto: "Quítense de vosotros toda amargura, enojo, ira, gritería y maledicencia.",
            referencia: "Efesios 4:31"
        }
    ],
    perdido: [
        {
            texto: "Yo soy el camino, la verdad y la vida.",
            referencia: "Juan 14:6"
        },
        {
            texto: "Confía en el Señor de todo corazón, y no te apoyes en tu propia prudencia.",
            referencia: "Proverbios 3:5"
        },
        {
            texto: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
            referencia: "Salmos 119:105"
        },
        {
            texto: "El Señor dice: Yo te instruiré, yo te mostraré el camino que debes seguir; yo te daré consejos y velaré por ti.",
            referencia: "Salmos 32:8"
        },
        {
            texto: "Busquen primeramente el reino de Dios y su justicia, y todas estas cosas les serán añadidas.",
            referencia: "Mateo 6:33"
        }
    ]
};

// Variable para rastrear la emoción actual
let emocionActual = null;
let indiceActual = 0;

// ================================
// Función para mostrar versículo
// ================================
function showVerse(emotion) {
    // Guardar la emoción actual
    emocionActual = emotion;
    
    // Obtener un versículo aleatorio
    const versiculosEmocion = versiculos[emotion];
    indiceActual = Math.floor(Math.random() * versiculosEmocion.length);
    const versiculo = versiculosEmocion[indiceActual];
    
    // Actualizar el contenido
    const titulos = {
        triste: "Cuando estás triste...",
        alegre: "¡Celebra tu alegría!",
        ansioso: "Para tu ansiedad...",
        solo: "Nunca estás solo/a...",
        miedo: "No tengas miedo...",
        enojado: "Para calmar tu corazón...",
        agradecido: "¡Gracias a Dios!",
        perdido: "Encuentra tu camino..."
    };
    
    document.getElementById('emotion-title').textContent = titulos[emotion];
    document.getElementById('verse-text').textContent = `"${versiculo.texto}"`;
    document.getElementById('verse-reference').textContent = versiculo.referencia;
    
    // Mostrar el contenedor de versículos y ocultar el mensaje de bienvenida
    document.getElementById('verse-container').classList.remove('d-none');
    document.getElementById('welcome-message').classList.add('d-none');
    
    // Animar la aparición
    const container = document.getElementById('verse-container');
    container.style.animation = 'none';
    container.offsetHeight; // Trigger reflow
    container.style.animation = 'fadeIn 0.5s ease-in-out';
    
    // Actualizar botones activos
    document.querySelectorAll('.emotion-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-emotion="${emotion}"]`).classList.add('active');
}

// ================================
// Función para mostrar otro versículo
// ================================
function showAnotherVerse() {
    if (!emocionActual) return;
    
    const versiculosEmocion = versiculos[emocionActual];
    let nuevoIndice;
    
    // Asegurar que sea un versículo diferente si hay más de uno
    if (versiculosEmocion.length > 1) {
        do {
            nuevoIndice = Math.floor(Math.random() * versiculosEmocion.length);
        } while (nuevoIndice === indiceActual);
        indiceActual = nuevoIndice;
    }
    
    const versiculo = versiculosEmocion[indiceActual];
    
    // Actualizar con animación
    const verseText = document.getElementById('verse-text');
    const verseRef = document.getElementById('verse-reference');
    
    verseText.style.opacity = '0';
    verseRef.style.opacity = '0';
    
    setTimeout(() => {
        verseText.textContent = `"${versiculo.texto}"`;
        verseRef.textContent = versiculo.referencia;
        verseText.style.opacity = '1';
        verseRef.style.opacity = '1';
    }, 300);
}

// ================================
// Inicialización
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // Agregar transiciones suaves a los textos
    const verseText = document.getElementById('verse-text');
    const verseRef = document.getElementById('verse-reference');
    
    if (verseText) {
        verseText.style.transition = 'opacity 0.3s ease';
    }
    if (verseRef) {
        verseRef.style.transition = 'opacity 0.3s ease';
    }
    
    console.log('✨ Grupo Juvenil Virgen del Carmen - Página cargada correctamente');
});
