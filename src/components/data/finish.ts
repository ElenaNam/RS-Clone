export interface Rules {
  id: number
  ru: string
  en: string
  de: string
}
  
export const rules: Rules[] = [
  {
    id: 0,
    ru: 'Мы ничего не берём у посторонних, малознакомых и даже знакомых людей без разрешения родителей;',
    en: 'We do not take anything from strangers, strangers, or even acquaintances without the permission of our parents;',
    de: 'Wir nehmen nichts von Fremden, unbekannten und sogar bekannten Menschen ohne die Erlaubnis der Eltern;',
  },
  {
    id: 1,
    ru: 'Не заходим на чужую территорию (дом, автомобиль, двор) без разрешения от родителей, полученных лично;',
    en: "We do not enter someone else's territory (house, car, yard) without permission from parents, obtained in person;",
    de: 'Wir betreten kein fremdes Territorium (Haus, Auto, Hof) ohne Erlaubnis von den Eltern, die persönlich erhalten wurden;',
  },
  {
    id: 2,
    ru: 'Не передвигаемся с незнакомыми и малознакомыми людьми по неизученной местности;',
    en: 'We do not move with strangers and unfamiliar people on unexplored terrain;',
    de: 'Wir bewegen uns nicht mit Fremden und unbekannten Menschen auf unerforschtem Gelände;',
  },
  {
    id: 3,
    ru: 'Различаем людей, законом обязанных помогать нам, и тех, кто не обязан это делать;',
    en: 'We distinguish between people who are legally obliged to help us, and those who are not obliged to do so;',
    de: 'Wir unterscheiden zwischen den Menschen, die gesetzlich verpflichtet sind, uns zu helfen, und denen, die nicht verpflichtet sind, dies zu tun;',
  },
  {
    id: 4,
    ru: 'Различаем по профессиям людей, которым мы можем рассказывать о себе, цели своего путешествия и своей семье;',
    en: 'We distinguish by profession people to whom we can tell about ourselves, the purpose of our journey and our family;',
    de: 'Wir unterscheiden in den Berufen von Menschen, denen wir über uns selbst, den Zweck ihrer Reise und ihre Familie erzählen können;',
  },
  {
    id: 5,
    ru: 'Остаёмся вежливыми, чтобы не вызвать ответную недоброжелательность;',
    en: 'We remain polite, so as not to cause reciprocal ill-will;',
    de: 'Wir bleiben höflich, um keine Gegenfeindlichkeit zu verursachen;',
  },
  {
    id: 6,
    ru: 'Твёрдо придерживаемся правил безопасности и не отступаем от них!',
    en: 'We firmly adhere to the safety rules and do not deviate from them!',
    de: 'Wir halten uns fest an die Sicherheitsregeln und ziehen uns nicht von ihnen zurück!',
  },
];
  
export interface Final {
  ru: string
  en: string
  de: string
}
  
export const finalPhrase: Final = { // говорит джин
  ru: 'Теперь ты знаешь все правила самостоятельного путешествия! Не забывай их! И пусть в твоей жизнь встречаются только добрые люди!',
  en: "Now you know all the rules of independent travel! Don't forget them! And let only good people meet in your life!",
  de: 'Jetzt kennst du alle Regeln der Selbstreise! Vergiss sie nicht! Und lass in deinem Leben nur gute Menschen treffen!',
};