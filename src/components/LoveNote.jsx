import React, { useState } from 'react';
import Cat from './Cat';

const LoveNote = ({ onReplay }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleScreenshot = () => {
    alert("I can't take the screenshot for you, but I'll pose! 📸\n(Press your screenshot buttons now!)");
  };

  if (!isOpen) {
    return (
      <div className="flex flex-col items-center justify-center animate-float cursor-pointer" onClick={handleOpen}>
        <div className="relative w-64 h-40 bg-pastel-pink rounded-lg shadow-xl flex items-center justify-center border-4 border-white transform transition-transform hover:scale-105">
          <div className="absolute top-0 left-0 w-full h-full border-b-4 border-l-4 border-r-4 border-white/50 rounded-lg clip-path-envelope"></div>
          <span className="text-4xl">💌</span>
          <span className="absolute bottom-4 text-warm-brown font-bold">For You</span>
        </div>
        <p className="mt-4 text-warm-brown animate-bounce">Tap to open</p>
      </div>
    );
  }

  return (
    <div className="relative max-w-lg mx-auto animate-fade-in-up">
      <div className="bg-[#fff9f0] p-8 md:p-12 rounded-sm shadow-2xl transform rotate-1 border border-[#e3dccb] relative overflow-hidden">
        {/* Paper texture effect */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
        
        {/* Peeking Cat */}
        <div className="absolute -top-12 -right-8 transform rotate-12">
          <Cat mood="shy" className="w-24 h-24" />
        </div>

        <div className="relative z-10 space-y-6 text-center">
          <h1 className="text-3xl font-bold text-warm-brown mb-6">Happy New Year, my love 🐱💛</h1>
          
          <div className="space-y-4 text-lg leading-relaxed text-gray-700 font-medium">
            <p>
              I'm a little late to write something for u cause i was busy with the bookmark sry!
              so the first time i saw u , i thought u were cute. this is quite suprising cause i don't really
              think about ppl when i first see them . like i have zero first impression of ppl.so.. first time we met
              on the way back home i honestly didn't clearly know ur name. i was more suprised u talked to me
              actually on the way back , i was quite nervous that day. cpps labs yes, it was fun to help u 
              out cause i kinda had a reason to talk to u. i liked how we worked the readings together in qb labs too lol.
              it felt really nice to talk to u , i got that feeling after so long. i really hoped to see when going to cllg
              or back to pg. like just yap with u , it was really funn. i miss those days so much!! Maybe 
              i unknowlingly had a crush on u but didn't realize it , maybe cause we only talked abot studies
              those days.
            </p>
            
            <p>
                when i saw an anime pfp on ur whatsapp profile , i was so happy to know that u see anime lol , u were the first
                person that i found out watched it . i was so glad that now there's somethign to talk about other than studies lol.
                i realised it in iidtl lab that i really liked u(took this dumbass a long time lol). but i wasn't sure how things would
                turn out . so i just talked with u at every oppurtunity i could get . i really miss seeing u everyday man that was such a blessing!
                so slowlly slowly we talked a lot about other stuff , and my hopes increased but i still wasn't sure.u would always
                say i was rude and all so that definetely held me back a lot ( i mean well i was..). idk why i keep my distance from u 
                when ur with ur friends and all and well i missed wishing u on that day(i knew smtg like this will happen so i wished day before).
                and omg u were so mad at me afterwards but that nice things game definetely turned the whole game!!
            </p>
            
            <p>
                now looking back at things i'm so glad to love you and spennd time with u. i'm so thankful u forgave me for all 
                mistakes and stupidity i did and all the times i hurted u(i still feel bad abt this..).i'm glad i choose u. i wish 
                i could be with u just hugging u and kissing u when ur sad. i know u worry a lot and are stressed a lot about things
                but that's okk i'll listen to u always and comfort u cuz i want to see u smile and happy!!(doesn't work out much though lol)
                i also feel sad when i can't comfort u , sometimes the only way to forget ur mistakes is to laugh at ur own mistakes but i don't feel like
                laughing at urs and making u laugh then. i'm really happy to see ur "i miss u" texts lol then write a lover boy text lmao.
                i'm so glad i can talk to someone about some issues and all honestly abt anything atp lol.i never really thought talking about issues
                would be so relieving . i'm so glad u taught me that hehe! Loving u has definetely changed me into a better person.
                i don't want to worry u so i'll take care of myself. u made me realize that i could love someone whole heartedly!!
            </p>
            
            <p>
                i'm really really eternally grateful that i found u , found someone i really treasure and love. ugh why can't i kiss u fuck this distance ughh.
                ummm can't do anyting about it lol (whining of a golden retriever). omg honey i just wanna huggg uuu !! i just fucking love u so muchhhhhh yesssssssss
            </p>
          </div>

          <p className="text-xl font-bold text-warm-brown mt-8 text-right">
            🐾 Ur dumbass stupid bf!
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <button onClick={onReplay} className="btn-primary bg-pastel-blue hover:bg-blue-200">
          Replay the quiz 🐾
        </button>
        <button onClick={handleScreenshot} className="btn-primary bg-pastel-yellow hover:bg-yellow-200">
          Take a screenshot 💌
        </button>
      </div>
    </div>
  );
};

export default LoveNote;
