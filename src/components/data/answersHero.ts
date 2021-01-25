import { namePlayer } from './variables';

interface Assistant {
  answer: string[];
  interpretation: string[];
}
export interface Answers {
  id: number;
  score: string[] /* или number?? */;
  ru: Assistant;
  en: Assistant;
  de: Assistant;
}

export const answers: Array<Answers> = [
  {
    id: 0, // мама
    score: ['', '', '', '', ''],

    ru: {
      answer: ['', '', '', '', ''],
      interpretation: ['', '', '', '', ''],
    },

    en: {
      answer: ['', '', '', '', ''],
      interpretation: ['', '', '', '', ''],
    },

    de: {
      answer: ['', '', '', '', ''],
      interpretation: ['', '', '', '', ''],
    },
  },
  {
    id: 1, // соседка
    score: ['', '', '', '', ''],

    ru: {
      answer: [
        `Мои мама и папа будут весь день на работе, а бабушка заболела. Она живет в очень далекой глухой деревне, 
        и мне нужно отвезти ей лекарства. Это будет сложная дорога через лес. Мне страшно, потому что я пойду одна.`,
        'Не ваше дело! Иду и иду…',
        'К бабушке.',
        'Просто гуляю.',
        'Я иду на остановку',
      ],
      interpretation: ['', '', '', '', ''],
    },

    en: {
      answer: [
        `My mom and dad will be at work all day, and my grandma is sick. She lives in a very remote remote village,
        and I need to take her medicine.
        It will be a difficult road through the forest. I'm scared because I'm going alone.`,
        'Not your business! Coming and going...' /* ????  */,
        'To grandma.',
        'Just walking',
        'I\'m going to the bus stop',
      ],
      interpretation: ['', '', '', '', ''],
    },

    de: {
      answer: ['', '', '', '', ''],
      interpretation: [
        `Meine Mutter und mein Vater werden den ganzen Tag bei der Arbeit sein,
        und meine Großmutter ist krank. Sie lebt in einem sehr Fernen Tauben Dorf,
        und ich muss Ihr Medikamente bringen. Es wird ein schwieriger Weg durch den Wald. 
        Ich habe Angst, weil ich allein gehen werde.`,
        'Es geht Sie nichts an! Ich gehe und gehe…',
        'Zu Oma.',
        'Ich gehe nur spazieren.',
        'Ich gehe zur Haltestelle',
      ],
    },
  },
  {
    id: 2, // продавец мороженого
    score: ['', '', '', '', ''],

    ru: {
      answer: [
        'Здравствуйте! Спасибо! Да, давайте, а то мне ехать далеко.',

        'Здравствуйте! Да, далеко – к бабушке. Она заболела и я везу ей лекарства, так как родители весь день на работе.',

        'Здравствуйте! Нет, спасибо',

        'Здравствуйте! Нет, мама послала в соседний магазин за хлебом. Дайте мороженое, пожалуйста!',

        'Да, хочу вон то, самое дорогое!',
      ],
      interpretation: ['', '', '', '', ''],
    },

    en: {
      answer: [
        'Hello there! Thanks! Yes, come on. I have a long way to go.',
        `Hello there! Yes, far away-to my grandmother. 
                She's sick. I carry her medicine because her parents are at work all day.`,
        'Hello there! No, thanks',
        `Hello there! No, my mother sent to the nearby store for bread. 
                Give me some ice cream, please!`,
        'Yes, I want the most expensive one!',
      ],
      interpretation: ['', '', '', '', ''],
    },

    de: {
      answer: [
        'Hallo! Danke! Ja, kommt schon, sonst muss ich weit fahren.',
        `Hallo! Ja, weit Weg-zu Oma. Sie ist krank und ich bringe Ihr Medikamente,
                weil meine Eltern den ganzen Tag bei der Arbeit sind.`,
        'Hallo! Nein, danke.',
        `Hallo! Nein, meine Mutter schickte in den Laden nebenan, um Brot zu holen.
                Geben Sie mir ein Eis, bitte!`,
        'Ja, ich will das, das teuerste!',
      ],
      interpretation: ['', '', '', '', ''],
    },
  },
  {
    id: 3, // водитель автомобиля
    score: ['', '', '', '', ''],

    ru: {
      answer: [
        'Нет, спасибо. Я все-таки подожду автобус.',

        `Как здорово! Мне в Деревню. 
                *садится
                `,

        'Нет, спасибо! Я жду, сейчас сюда папа подъедет.',

        'Еще чего! Знаем мы таких – увезете еще в лес!..',

        '*Игнорирует.',
      ],
      interpretation: ['', '', '', '', ''],
    },

    en: {
      answer: [
        'No, thank you. I\'ll wait for the bus.',
        `How great! I'm going to the Village.
                *gets in the car`,
        'No, thank you! I\'m waiting for Dad to come here now.',
        'What else! I know - you will take my to the forest!..',
        '*Ignores',
      ],
      interpretation: ['', '', '', '', ''],
    },

    de: {
      answer: [
        'Nein, danke. Ich warte noch auf den Bus.',
        `Wie toll! Ich gehe ins Dorf.
                *steigt ins Auto`,
        'Nein, danke! Ich warte, Papa kommt hierher',
        'Was? Ich kenne solche – Sie werden in den Wald mich wegbringen!..',
        '*Ignoriert',
      ],
      interpretation: ['', '', '', '', ''],
    },
  },
  {
    id: 4, // лесник
    score: ['', '', '', '', ''],

    ru: {
      answer: [
        `Ой, спасибо, дядя лесник! Я только одним глазком через щелочку в заборе на них посмотрю,
        а заходить не буду – мне торопиться нужно.
        `,

        'Как здорово! Я действительно устала, от чая не откажусь.',

        'Да ну, лисы – это скучно. Я их тысячу раз в интернете видела. А чай давайте. А шоколадка к чаю есть?',

        'А можно я на обратном пути загляну? А то сейчас тороплюсь...',

        'Обожаю лис! А можно их сфотографировать?',
      ],
      interpretation: ['', '', '', '', ''],
    },

    en: {
      answer: [
        `Oh, thank you, Uncle Forester! I'll just look at them through 
                a crack in the fence with one eye,
                And I won't go in – I need to hurry`,
        'Cool! I\'m really tired, I won\'t give up tea.',
        `Come on, foxes are boring. I've seen them a thousand times on the Internet.
                 And give me some tea. Do you have a chocolate bar for tea?`,
        'Can I stop by on my way back?" I\'m in a hurry right now...',
        'I love foxes! Can I take a picture of them?',
      ],
      interpretation: ['', '', '', '', ''],
    },

    de: {
      answer: [
        `Danke, Onkel Förster! Ich will sie nur mit einem Auge sehen durch die Lauge im Zaun,
                aber ich werde nicht reinkommen - ich muss mich beeilen`,
        'Wie toll! Ich bin wirklich müde, ich werde Tee nicht aufgeben.',
        `Ja, Füchse sind langweilig. Ich habe Sie tausendmal im Internet gesehen.
                Ich nehme Tee. Hast du Schokolade zum Tee?`,
        'Darf ich auf dem Rückweg vorbeischauen? Denn jetzt bin ich in Eile...',
        'Ich liebe Fuchs! Könne ich ein Foto machen?',
      ],
      interpretation: ['', '', '', '', ''],
    },
  },
  {
    id: 5, // девочка
    score: ['', '', '', '', ''],

    ru: {
      answer: [
        'Нет, я очень занята.',
        'Обожаю землянику, пойдем скорее! А то мне нужно успеть к бабушке.',

        'Извини, родители запретили мне отвлекаться. Удачи тебе с земляникой!',

        `Дина, привет! А меня зовут ${namePlayer}. Слушай, я сейчас не могу.
        Давай телефонами обменяемся, и в следующий раз вместе сходим за земляникой.
        `,

        'А давай наоборот – ты пойдешь со мной, и по дороге мы будем собирать землянику.',
      ],
      interpretation: ['', '', '', '', ''],
    },

    en: {
      answer: [
        'No, I\'m very busy.',
        'I love strawberries, let\'s go soon! I need to get to my grandmother.',
        'I\'m sorry, my parents forbade me to be distracted. Good luck with the strawberries!',
        `Dina, hi! And my name is ${namePlayer}. Look, I can't right now.
                Let's exchange phones, and next time we go get a strawberry together.`,
        'And on the contrary, you will come with me, and on the way we will collect strawberries.',
      ],
      interpretation: ['', '', '', '', ''],
    },

    de: {
      answer: [
        'Nein, ich bin sehr beschäftigt.',
        'Ich liebe Erdbeeren, komm schon! Ich muss zu meiner Großmutter.',
        `Tut mir Leid, meine Eltern haben mir verboten, 
                abgelenkt zu werden. Viel Glück mit Erdbeeren!`,
        `Dina, hallo! Und ich heisse ${namePlayer}. Hör zu, ich kann jetzt nicht.
                Lass uns die Telefone austauschen und das nächste Mal gehen wir zusammen Erdbeeren holen.`,
        'Aber im Gegenteil-du gehst mit mir, und auf dem Weg werden wir Erdbeeren sammeln.',
      ],
      interpretation: ['', '', '', '', ''],
    },
  },

  {
    id: 6, // охотник
    score: ['', '', '', '', ''],

    ru: {
      answer: [
        'Спасибо, не нужно. Я хорошо знаю дорогу.',
        'Да, конечно, давайте дойдем вместе.',
        'Еще чего! Столько одна прошла и дальше без вас справлюсь!',
        'Здравствуйте, спасибо. Провожать не нужно, лучше подскажите, который час?',
        'Да, давайте. А ружье у вас настоящее? А можно посмотреть?',
      ],
      interpretation: ['', '', '', '', ''],
    },

    en: {
      answer: [
        'Thank you, no need. I know the way well.',
        'Yes, of course, let\'s go together.',
        'What else! So much one has passed and then I can cope without you!',
        `Hello, thank you. You do not need to see me off, 
                    it is better to tell me what time it is?`,
        'Yes, come on. Do you have a real gun?" Can I see it?',
      ],
      interpretation: ['', '', '', '', ''],
    },

    de: {
      answer: [
        'Danke, nicht nötig. Ich kenne den Weg gut.',
        'Ja, natürlich, kommen wir zusammen.',
        'Was? So viel ging und weiter, ohne Sie zu bewältigen!',
        `Hallo, danke. Es ist nicht notwendig zu begleiten,
                    es ist besser zu sagen, wie spät es ist?`,
        'Ja, kommen Sie. Ist die Waffe echt? Darf ich das sehen?',
      ],
      interpretation: ['', '', '', '', ''],
    },
  },
  {
    id: 7, // участковый
    score: ['', '', '', '', ''],

    ru: {
      answer: [
        'Я иду к бабушке, она меня уже ждет.',
        `Я ${namePlayer}, моя бабушка -  Марья Ивановна. Иду к ней в гости, она меня уже ждет.`,
        'А вам какое дело? Меня учили никому ничего не рассказывать!',
        'А вы, правда, полицейский? Родители объясняли мне, что не каждый человек в форме может быть полицейским и ему можно доверять.',
        `Я ${namePlayer}. Я не в первый раз сюда в одиночку иду. И вообще без родителей я часто хожу.`,
      ],
      interpretation: ['', '', '', '', ''],
    },

    en: {
      answer: [
        'I\'m going to grandma\'s, she\'s waiting for me.',
        `I ${namePlayer}, my grandmother is Marya Ivanovna.
                    I'm going to visit her, she's waiting for me.`,
        'What do you care? I was taught not to tell anyone anything!',
        `Are you really a cop? Parents explained to me that not every person
                    in uniform can be a cop and can be trusted.`,
        `I am ${namePlayer}. It's not the first time I've come here alone.
                    And I often go without my parents.`,
      ],
      interpretation: ['', '', '', '', ''],
    },

    de: {
      answer: [
        'Ich gehe zu meiner Großmutter, sie wartet schon auf mich.',
        `Ich ${namePlayer}, meine Großmutter - Marija Iwanowna.
                    Ich gehe zu ihr, sie wartet schon auf mich.`,
        'Was kümmert es Sie? Mir wurde beigebracht, niemandem etwas zu sagen!',
        `Sind Sie wirklich ein Polizist? Die Eltern erklärten mir, dass nicht jeder in Form ist
                    vielleicht ein Polizist und man kann ihm vertrauen.`,
        `Ich bin ${namePlayer}. Ich bin nicht das erste mal hier allein.
                    Und im Allgemeinen gehe ich oft ohne Eltern.`,
      ],
      interpretation: ['', '', '', '', ''],
    },
  },
  {
    id: 8, // учитель
    score: ['', '', '', '', ''],

    ru: {
      answer: [
        'Нет, отстаньте от меня!',
        `Спасибо, с большим удовольствием. Я сейчас быстренько бабушке отнесу лекарства 
        и прибегу к Вам домой.`,
        'Спасибо за приглашение! Я сейчас зайду к бабушке и у нее отпрошусь.',
        'Мы познакомимся в школе, когда начнутся занятия.',
        'А Вы учитель по какому предмету? У меня с математикой плохо. Вы мне поможете?',
      ],
      interpretation: ['', '', '', '', ''],
    },

    en: {
      answer: [
        'No, leave me alone!',
        `Thank you, with great pleasure. I'll take my meds to
                    my grandmother right now and go home to you.`,
        'Thank you for the invitation! I\'m going to go to my grandmother and ask her permission.',
        'We\'ll meet at school when class starts.',
        'What subject are you a teacher in? I\'m not good at math. Will you help me?"',
      ],
      interpretation: ['', '', '', '', ''],
    },

    de: {
      answer: [
        'Nein, lasst mich in Ruhe!',
        `Danke, mit viel Vergnügen. Ich bringe meiner Großmutter
                die Medikamente und komme zu Ihnen nach Hause.`,
        `Danke für die Einladung! Ich gehe zu meiner Großmutter
                und Frage Sie um Erlaubnis.`,
        'Wir lernen uns in der Schule kennen, wenn der Unterricht beginnt.',
        `Sind Sie ein Lehrer in welchem Fach? Ich bin nicht gut in Mathe.
                Können Sie mir helfen?`,
      ],
      interpretation: ['', '', '', '', ''],
    },
  },
  {
    id: 9, // сосед бабушки
    score: ['', '', '', '', ''],

    ru: {
      answer: [
        `Здравствуйте! Хорошо, отнесу. Только заходить не буду, здесь подожду. 
        Вы мне корзинку сюда вынесете, пожалуйста.`,
        'Нет, я слишком тороплюсь.',
        'А яблоки вкусные? А можно я сначала  попробую?',
        'Здравствуйте! Ладно. Можно я у вас немного посижу, пока жду. А то ноги устали.',
        'Нет, давайте я сначала к бабушке зайду. А потом к Вам прибегу. Вы как раз корзину наберете.',
      ],
      interpretation: ['', '', '', '', ''],
    },

    en: {
      answer: [
        `Hello! All right, I'll take it. Just don't come in,
                I'll wait here. You'll take me the basket here, please.`,
        'No, I\'m in too much of a hurry.',
        'And the apples are delicious? Can I try it first?',
        'Hello there! Okay. Can I sit here for a while while I wait?" My legs are tired.',
        'No, let me go to Grandma\'s first. And then I\'ll come running to you. You will just type the basket.',
      ],
      interpretation: ['', '', '', '', ''],
    },

    de: {
      answer: [
        `Hallo! Okay, ich bringe es. Ich komme nicht rein,
                ich warte hier. Sie bringen mir den Korb hierher, bitte.`,
        'Nein, ich habe es zu eilig.',
        'Sind äpfel lecker? Kann ich es zuerst versuchen?',
        `Hallo! Okay. Ich kann mich ein wenig bei Ihnen setzen, 
                während ich warte. Und dann sind die Beine müde.`,
        `Nein, ich gehe zuerst zu meiner Großmutter.
                Und dann werde ich auf Sie zurückgreifen. 
                Sie werden gerade einen Korb sammeln.`,
      ],
      interpretation: ['', '', '', '', ''],
    },
  },
];

export default answers;
