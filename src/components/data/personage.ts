import { hero, namePlayer } from './variables';

export interface Person {
  name: string;
  text: string;
}

export interface Grandma {
  ru: Person
  en: Person
  de: Person
}
export interface Personage {  
  id: number
  ru?: Person
  en?: Person
  de?: Person
  result1?: Grandma
  result2?: Grandma
  result3?: Grandma
  /* variant?: Grandma */
}

export interface PersonageGranny { 
  id: number
  result1: Grandma
  result2: Grandma
  result3: Grandma
  /* variant?: Grandma */
}

export const personage: Personage[] = [
  {
    id: 0, // ГОРОД
    ru: {
      name: 'Мама',
      text: '{namePlayer}, мы с папой очень заняты на работе, а бабушка разболелась!\n Ей нужно срочно помочь. Тебе нужно будет поехать к ней в деревню и отвезти лекарство.\n Ты впервые отправишься самостоятельно в такой сложный путь, но мы уверены, что ты справишься. Только, пожалуйста, побыстрее довези до бабушки лекарство и помни – дорога может быть опасной!\n Берегись подозрительных людей и будь веди себя вежливо с хорошими людьми!\n Чтобы доехать до бабушки, в её деревню А…, нужно сперва дойти до остановки, потом сесть на автобус сорок пятого маршрута, на нём доехать до остановки Тёмный Лес, сойти на ней и через лес напрямки по дорожке пройти до деревне.\n И там не потеряешься – бабушка живёт на другой стороне деревни, в самом крайнем доме.\n Иди, {namePlayer}, бабушка ждёт тебя!',
    },
    en: {
      name: 'Mom',
      text: "{namePlayer}, my dad and I are very busy at work, and my grandmother is sick!\n She needs urgent help. You will need to go to her village and take the medicine.\n This is the first time you will go on such a difficult journey on your own, but we are sure that you will manage. Only, please, quickly take the medicine to your grandmother and remember – the road can be dangerous!\n Watch out for suspicious people and be polite to nice people!\n To get to my grandmother, to her village A..., you must first walk to the bus stop, then take the bus of the forty-fifth route, take it to the Dark Forest stop, get off at it and go straight through the forest along the path to the village.\n And you can't get lost there – my grandmother lives on the other side of the village, in the outermost house.\n Go, {namePlayer}, grandma is waiting for you!",
    },
    de: {
      name: 'Mutter',
      text: '{namePlayer}, mein Vater und ich sind sehr beschäftigt bei der Arbeit und deine Großmutter ist krank! Sie braucht dringend Hilfe.\n Du musst zu Ihr ins Dorf gehen und die Medizin mitnehmen.\n Du gehst zum ersten mal alleine auf diese schwierige Reise, aber wir sind sicher, dass du es schaffst. Nur, bitte, bringe die Medizin schnell zu Großmutter und denke  daran – die Straße kann gefährlich sein!\n Achte auf verdächtige Menschen und sei  höflich zu guten Menschen!\n Um zur Großmutter zu gelangen, in ihr Dorf A..., muss du zuerst die Haltestelle erreichen, dann nehmen  den Bus der fünfundvierzigsten Route, auf dem muss du bis zur Haltestelle Dark Forest fahren, raus an der Haltestelle   und durch den Wald  zum Dorf zu gehen.\n Und es wird nicht verloren gehen – Oma lebt auf der anderen Seite des Dorfes, im äußersten Haus.\n Geh, {namePlayer}, Oma wartet auf dich!',
    },
  },

  {
    id: 1, // ГОРОД
    ru: {
      name: 'Соседка',
      text: 'Здравствуй, {namePlayer}! Куда собираешься?',
    },
    en: {
      name: 'Neighbour',
      text: 'Hello, {namePlayer}! Where are you going?',
    },
    de: {
      name: 'Nachbarin',
      text: 'Hallo, {namePlayer}! Wo willst du hin?',
    },
  },

  {
    id: 2, // ГОРОД
    ru: {
      name: 'Продавец мороженого',
      text: 'Привет, {namePlayer}! Далеко направляешься? Хочешь на дорожку мороженого дам?',
    },
    en: {
      name: 'Ice cream vendor',
      text: 'Hello, {namePlayer}! How far  you going? Do you want some ice cream?',
    },
    de: {
      name: 'Eisverkäufer',
      text: 'Hallo, {namePlayer}! Weit Weg? Willst du Eis mitnehmen?',
    },
  },
  {
    id: 3, // ГОРОД
    ru: {
      name: 'Водитель автомобиля',
      text: 'Садись, {hero}, подвезу! Автобус когда еще приедет! Куда тебе надо?',
    },
    en: {
      name: 'Сar driver',
      text: "Get in, {hero}, I'll give you a ride! The bus will arrive not soon! Where do you want to go?", // перепроверить предложение
    },
    de: {
      name: 'Fahrer',
      text: 'Setz dich, {hero}, ich fahre! Der Bus, wenn er kommt! Wo willst du hin?',
    },
  },

  {
    id: 4, // ЛЕС
    ru: {
      name: 'Лесник',
      text: 'Здравствуй, {hero}! Ты здесь, чтобы посмотреть на лисят? Мама лиса как раз вывела их на прогулку. Они вон там за забором спрятались. Заходи, но только тихо. А я пока чайник согрею, чаем тебя напою.',
    },
    en: {
      name: 'Forester',
      text: "Hello, {hero}! Do you here to see the little foxes? Mama Fox had just taken them out for a walk. They're hiding behind the fence over there. Come in, but be quiet. I'll warm the kettle and give you some tea.",
    },
    de: {
      name: 'Waldwärter',
      text: 'Hallo, {hero}! Bist du hier, um die Füchse zu sehen? Mama Fuchs hat Sie gerade auf einen Spaziergang gebracht. Sie haben sich hinter einem Zaun versteckt. Komm rein, aber ruhig. Und während ich den Kessel warm mache, trinke ich dich mit Tee.',
    },
  },
  {
    id: 5, // ЛЕС
    ru: {
      name: 'Девочка',
      text: 'Привет! Как тебя сюда занесло? Меня Диной зовут, а тебя? Слушай, в этом лесу очень много земляники. Я знаю отличные места! Пойдем со мной?! Ты мне поможешь собрать корзину, мы вместе наедимся сладкой земляники!',
    },
    en: {
      name: 'Girl',
      text: 'Hi! How did you get here?" My name is Dina, and yours? Look, there are a lot of strawberries in this forest. I know great places! Come with me?! You will help me to collect the basket, we will eat sweet strawberries together!',
    },
    de: {
      name: 'Mädchen',
      text: 'Hallo! Wie bist du hierher gekommen? Mein name ist Dina, und du? In diesem Wald gibt es viele Erdbeeren. Ich kenne tolle Orte! Kommst du mit mir?! Du wirst mir helfen, den Korb zu sammeln, wir werden zusammen süße Erdbeeren Essen!',
    },
  },
  {
    id: 6, // ЛЕС
    ru: {
      name: 'Охотник',
      text: 'Здравствуй, {hero}! Ну, судя по тому, по какой дороге ты идешь, направляешься ты в деревню А... А знаешь ли ты, что детям находиться в лесу одним опасно? Давай я тебя провожу. А то мало ли что может случится с маленьким ребёнком в дороге!',
    },
    en: {
      name: 'Hunter',
      text: "Hello, {hero}! Well, judging by the road you're taking, you're heading for the Village A... Did you know that it is dangerous for children to be alone in the forest? Let me walk you out. And then you never know what can happen to a small child on the road!",
    },
    de: {
      name: 'Jäger',
      text: 'Hallo, {hero}! Nun, nach dem Weg, den du gehst, bist du auf dem Weg ins Dorf A... Weißt du, dass es für Kinder gefährlich ist, allein im Wald zu sein? Lass mich dich begleiten. Und es gibt wenig, was mit einem kleinen Kind auf der Straße passieren kann!',
    },
  },
  {
    id: 7, // ДЕРЕВНЯ
    ru: {
      name: 'Участковый',
      text: 'День добрый! Лейтенант полиции Чижик! Кто ты? Куда направляешься? Почему без сопровождения взрослых?',
    },
    en: {
      name: 'Policeman',
      text: 'Good afternoon! Police Lieutenant Chizhik! Who are you? Where are you going? Why unaccompanied?',
    },
    de: {
      name: 'Revier',
      text: 'Guten Tag! Lieutenant Chizhik! Wer bist du? Wohin gehst du? Warum ohne Begleitung von Erwachsenen?',
    },
  },
  {
    id: 8, // ДЕРЕВНЯ
    ru: {
      name: 'Учитель',
      text: 'Здравствуй, {hero}! Я новый учитель в здешней сельской школе. Я живу вон в том доме на краю деревни. Я хочу подружиться со всеми учениками. Давай познакомимся поближе. Пойдем ко мне. Зайдёшь на полчасика, чай попьём, поиграем в компьютерные игры. И у меня в этой деревне самый мощный компьютер…  Не бойся! Ты же знаешь, что учителям нужно доверять.',
    },
    en: {
      name: 'Teacher',
      text: "Hello, {hero}! I'm the new teacher at the village school here. I live in that house on the edge of the village. I want to make friends with all the students. Let's get to know each other better. Come to my place. Come in for half an hour, drink tea, play computer games. And I have the most powerful computer in this village… Don't be afraid! You know you have to trust teachers.",
    },
    de: {
      name: 'Lehrer',
      text: 'Hallo, {hero}! Ich bin der neue Lehrer an der Dorfschule. Ich wohne in diesem Haus am Rande des Dorfes. Ich möchte mich mit allen Schülern anfreunden. Lass uns uns näher kennenlernen. Komm zu mir. Du kommst für eine halbe Stunde, wir trinken Tee, wir spielen Computerspiele. Und ich habe den mächtigsten Computer in diesem Dorf... fürchte dich nicht! Du weißt, dass Lehrer Vertrauen müssen.',
    },
  },
  {
    id: 9, // ДЕРЕВНЯ
    ru: {
      name: 'Сосед бабушки',
      text: 'А, {namePlayer}, к бабушке торопишься? Зайди на минутку в дом, я ей яблоки обещал. Сейчас наберу корзинку, отнесешь.',
    },
    en: {
      name: "Grandma's neighbor",
      text: "And, {namePlayer}, are you in a hurry to see your grandmother? Come inside for a minute, I promised her apples. I'll pick up a basket and take it to you.",
    },
    de: {
      name: 'Oma Nachbar',
      text: 'Oh, {namePlayer}, bist du in Eile zu deiner Großmutter? Komm mal ins Haus. Ich habe Ihr äpfel versprochen. Ich werde einen Korb mit Äpfeln pflücken.',
    },
  },
];

export const personageGranny: PersonageGranny = {
  id: 10, // ДЕРЕВНЯ
  result1: { // плохой результат 0-11 баллов
    ru: {
      name: 'Бабушка',
      text: 'Здравствуй, {namePlayer}! Слишком долго я тебя ждала... Пришлось просить о помощи соседей. Тебе нужно хорошо выучить правила самостоятельного путешествия!',
    },
    en: {
      name: 'Grandma',
      text: "Hello, {namePlayer}!I've waited too long for you... I had to ask the neighbors for help. You need to learn the rules of independent travel well!",
    },
    de: {
      name: 'Großmutter',
      text: 'Hallo, {namePlayer}!Ich habe zu lange auf dich gewartet... Ich musste um Hilfe von Nachbarn bitten. Sie müssen die Regeln der selbständigen Reise gut lernen!',
    },
  },
  result2: { // хороший результат 12-17 баллов
    ru: {
      name: 'Бабушка',
      text: 'Здравствуй, {namePlayer}! Как же долго я тебя ждала! Думала уж совсем разболеюсь… Но хорошо, что лекарство наконец здесь… Как дорога? Хорошо ли теперь знаешь правила самостоятельного путешествия?',
    },
    en: {
      name: 'Grandma',
      text: "Hello, {namePlayer}! How long I've been waiting for you! I thought I'd get really sick… But it's good that the cure is finally here... how's the road? How well do you know the rules of independent travel now?",
    },
    de: {
      name: 'Großmutter',
      text: 'Hallo, {namePlayer}! Wie lange habe ich auf dich gewartet! Ich dachte, ich werde krank... Aber es ist gut, dass die Medizin endlich da ist... Wie ist der Weg? Kennst du jetzt die Regeln der Selbstreise?',
    },
  },
  result3: { // отличный результат 18 баллов
    ru: {
      name: 'Бабушка',
      text: 'Здравствуй, {namePlayer}! Как хорошо, что у тебя получилось приехать так быстро! Спасибо за лекарство. Я тобой горжусь! И теперь хорошо знаешь все правила самостоятельного путешествия!',
    },
    en: {
      name: 'Grandma',
      text: "Hello, {namePlayer}! How nice that you were able to come so quickly! Thank you for the medicine. I'm proud of you! And now you know all the rules of independent travel well!",
    },
    de: {
      name: 'Großmutter',
      text: 'Hallo, {namePlayer}! Wie schön, dass du es geschafft hast, so schnell zu kommen! Danke für die Medizin. Ich bin stolz auf dich! Und jetzt kennst du alle Regeln der Selbstreise!',
    },
  }
};

export default personage;
