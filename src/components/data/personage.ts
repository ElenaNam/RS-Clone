import { hero, namePlayer } from './variables';

export const personage: object[] = [
  {
    id: '0', //ГОРОД
    ru: {
      name: 'Мама',
      text: `
            Бабушка заболела. Нужно привезти ей лекарства.
            Мы с папой не можем уйти с работы. Придется тебе съездить.
            `,
    },
    en: {
      name: 'Mom',
      text: `
            My grandmother is ill. We need to get her some medicine. 
            Dad and I can't leave work. You'll have to go.
            `,
    },
    de: {
      name: 'Mutter',
      text: `
            Oma ist krank. Sie braucht Medikamente. 
            Dad und ich können nicht von der Arbeit gehen.
            Du musst gehen.
            `,
    },
  },

  {
    id: '1', //ГОРОД
    ru: {
      name: 'Соседка',
      text: `Здравствуй, ${namePlayer}! Куда собираешься?`,
    },
    en: {
      name: 'Neighbour',
      text: `Hello, ${namePlayer}! Where are you going?`,
    },
    de: {
      name: 'Nachbarin',
      text: `Hallo, ${namePlayer}! Wo willst du hin?`,
    },
  },

  {
    id: '2', //ГОРОД
    ru: {
      name: 'Продавец мороженого',
      text: `Привет, ${namePlayer}!  Далеко направляешься? Хочешь на дорожку мороженого дам?`,
    },
    en: {
      name: 'Ice cream vendor',
      text: `Hello, ${namePlayer}! How far  you going? Do you want some ice cream?`,
    },
    de: {
      name: 'Eisverkäufer',
      text: `Hallo, ${namePlayer}! Weit Weg? Willst du Eis mitnehmen?`,
    },
  },
  {
    id: '3', //ГОРОД
    ru: {
      name: 'Водитель автомобиля',
      text: `Садись, ${hero}, подвезу! Автобус когда еще приедет! Куда тебе надо?`,
    },
    en: {
      name: 'Сar driver',
      text: `Get in, ${hero}, I'll give you a ride! The bus will arrive not soon! Where do you want to go?`, //перепроверить предложение
    },
    de: {
      name: 'Fahrer',
      text: `Setz dich, ${hero}, ich fahre! Der Bus, wenn er kommt! Wo willst du hin?`,
    },
  },

  {
    id: '4', //ЛЕС
    ru: {
      name: 'Лесник',
      text: `
            Здравствуй, ${hero}! Ты здесь, чтобы посмотреть на лисят? 
            Мама лиса как раз вывела их на прогулку. Они вон там за забором спрятались. 
            Заходи, но только тихо. А я пока чайник согрею, чаем тебя напою.
            `,
    },
    en: {
      name: 'Forester',
      text: `
            Hello, ${hero}! Do you here to see the little foxes?
            Mama Fox had just taken them out for a walk. They're hiding behind the fence over there.
            Come in, but be quiet. I'll warm the kettle and give you some tea.
            `,
    },
    de: {
      name: 'Waldwärter',
      text: `
            Hallo, ${hero}! Bist du hier, um die Füchse zu sehen?
            Mama Fuchs hat Sie gerade auf einen Spaziergang gebracht. Sie haben sich hinter einem Zaun versteckt.
            Komm rein, aber ruhig. Und während ich den Kessel warm mache, trinke ich dich mit Tee.
            `,
    },
  },
  {
    id: '5', //ЛЕС
    ru: {
      name: 'Девочка',
      text: `
            Привет! Как тебя сюда занесло? Меня Диной зовут, а тебя? 
            Слушай, в этом лесу очень много земляники. Я знаю отличные места! Пойдем со мной?! 
            Ты мне поможешь собрать корзину, мы вместе наедимся сладкой земляники!
            `,
    },
    en: {
      name: 'Girl',
      text: `
            Hi! How did you get here?" My name is Dina, and yours? Look, there are a lot of strawberries in this forest.
            I know great places! Come with me?! You will help me to collect the basket, we will eat sweet strawberries together!
            `,
    },
    de: {
      name: 'Mädchen',
      text: `
            Hallo! Wie bist du hierher gekommen? Mein name ist Dina, und du?
            In diesem Wald gibt es viele Erdbeeren. Ich kenne tolle Orte! Kommst du mit mir?!
            Du wirst mir helfen, den Korb zu sammeln, wir werden zusammen süße Erdbeeren Essen!
            `,
    },
  },
  {
    id: '6', //ЛЕС
    ru: {
      name: 'Охотник',
      text: `
            Здравствуй, ${hero}! Ну, судя по тому, по какой дороге ты идешь, направляешься ты в Деревню.
            А знаешь ли ты, что детям находиться в лесу одним опасно? Давай я тебя провожу. 
            `,
    },
    en: {
      name: 'Hunter',
      text: `
            Hello, ${hero}! Well, judging by the road you're taking, you're heading for the Village. 
            Did you know that it is dangerous for children to be alone in the forest? Let me walk you out.
            `,
    },
    de: {
      name: 'Jäger',
      text: `
            Hallo, ${hero}! Nun, nach dem Weg, den du gehst, bist du auf dem Weg ins Dorf. 
            Weißt du, dass es für Kinder gefährlich ist, allein im Wald zu sein? Lass mich dich begleiten.
            `,
    },
  },
  {
    id: '7', //ДЕРЕВНЯ
    ru: {
      name: 'Участковый',
      text: `
            День добрый! Лейтенант полиции Чижик! Кто ты? Куда направляешься? Почему без сопровождения взрослых?
            `,
    },
    en: {
      name: 'Policeman',
      text: `
            Good afternoon! Police Lieutenant Chizhik! Who are you? 
            Where are you going?" Why unaccompanied?
            `,
    },
    de: {
      name: 'Revier',
      text: `
            Guten Tag! Lieutenant Chizhik! Wer bist du? Wohin gehst du? Warum ohne Begleitung von Erwachsenen?            
            `,
    },
  },
  {
    id: '8', //ДЕРЕВНЯ
    ru: {
      name: 'Учитель',
      text: `
            Здравствуй, ${hero}! Я новый учитель в здешней сельской школе. 
            Я живу вон в том доме на краю деревни. 
            Я хочу подружиться со всеми учениками. Давай познакомимся поближе. 
            Пойдем ко мне. Ты же знаешь, что учителям нужно доверять.
            `,
    },
    en: {
      name: 'Teacher',
      text: `
            Hello, ${hero}! I'm the new teacher at the village school here. 
            I live in that house on the edge of the village.
            I want to make friends with all the students. Let's get to know each other better.
            Come to my place. You know you have to trust teachers.
            `,
    },
    de: {
      name: 'Lehrer',
      text: `
            Hallo, ${hero}! Ich bin der neue Lehrer an der Dorfschule. 
            Ich wohne in diesem Haus am Rande des Dorfes.
            Ich möchte mich mit allen Schülern anfreunden. Lass uns uns näher kennenlernen.
            Komm zu mir. Du weißt, dass Lehrer Vertrauen müssen.
            `,
    },
  },
  {
    id: '9', //ДЕРЕВНЯ
    ru: {
      name: 'Сосед бабушки',
      text: `
            А, ${namePlayer}, к бабушке торопишься? Зайди на минутку в дом, я ей яблоки обещал. Сейчас наберу корзинку, отнесешь.
            `,
    },
    en: {
      name: "Grandma's neighbor",
      text: `
            And, ${namePlayer}, are you in a hurry to see your grandmother?
            Come inside for a minute, I promised her apples. I'll pick up a basket and take it to you.
            `,
    },
    de: {
      name: 'Oma Nachbar',
      text: `
            Oh, ${namePlayer}, bist du in Eile zu deiner Großmutter? Komm mal ins Haus. 
            Ich habe Ihr äpfel versprochen. Ich werde einen Korb mit Äpfeln pflücken.
            `,
    },
  },
];
