import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  BookOpen, 
  Code, 
  User, 
  ChevronRight, 
  Menu, 
  X,
  Terminal,
  Cpu,
  Globe,
  ArrowLeft,
  Construction
} from 'lucide-react';

// --- DATA ---

const USER_INFO = {
  name: "Alex Developer",
  title: "Full Stack Engineer & UI Designer",
  bio: "Creating creative and active ideas. Passionate about challenging projects, and writing unique, insightful analytical articles.",
  email: "lizirui99999@gmail.com",
  github: "https://github.com/Alex-lucian",
  linkedin: "https://www.linkedin.com/in/alexander-lirio-lucian-b52181380/",
};

// Empty array for now, waiting for future updates
const PROJECTS = [];

const ARTICLES = [
  {
    id: 1,
    title: "Without a Master's, You Can't Even Compete: Why You Must Pursue Graduate Studies",
    excerpt: "Discussions about 'degree devaluation' are everywhere. But if Master's graduates are struggling, what does that mean for everyone else? A reality check on academic competition.",
    link: null, 
    content: [
      { type: 'h3', text: "The Noise of Devaluation" },
      { type: 'p', text: "Recently, discussions regarding \"academic degree devaluation\" have reached a fever pitch. Open your phone, and the algorithm precisely feeds you headlines like: \"Top University Master's Graduate Works as Security Guard,\" \"985 Graduate Laid Off from Big Tech, Now Delivering Takeout,\" or \"Overseas Master's Grad Returns Home to a Salary of Only Few Thousand Yuan.\"" },
      { type: 'p', text: "The comment sections are filled with lamentation: \"See? What's the point of studying so much?\" or \"Degrees are worthless now; better to start working early.\"" },
      { type: 'p', text: "Amidst this overwhelming anxiety, many students who originally planned to take the postgraduate entrance exam (Kaoyan) are wavering. They ask: If degrees are depreciating so badly, why should I suffer through the exam preparation?" },
      { type: 'p', text: "Today, I want to pour a bucket of cold water on that hesitation, but also point out a true path for children from ordinary families who are feeling lost. I want to tell you this: Not only should you take the exam, but you should fight desperately to pass it. Precisely because it is true that \"Master's graduates are delivering takeout,\" you must pursue a higher degree even more." },
      { type: 'h3', text: "A Fatal Logical Fallacy: If Master's Grads are Swimming Naked, Undergrads have Already Drowned" },
      { type: 'p', text: "This is a counter-intuitive, yet extremely cruel logical truth. Many people see a Master's graduate delivering takeout and think: \"Education is useless. Not only did they waste three years, but they also missed out on three years of earnings.\"" },
      { type: 'p', text: "But please, use your logic to reverse-engineer this scenario: If even those at the upper levels of the educational pyramid (Master's graduates) are forced to deliver takeout or do manual labor in the current job market, then to what extent has the living space for those at the lower end of the chain—undergraduates and vocational students—been squeezed?" },
      { type: 'p', text: "This isn't just about \"devaluation\"; it is about the rising \"water level of survival.\"" },
      { type: 'p', text: "Imagine a flood coming. In the past, if you had an undergraduate degree as a stepping stone, you could keep your shoes dry. Now the floodwaters have risen. Even those standing on the high ground of a Master's degree find the water lapping at their ankles. At this moment, those who remained standing at the undergraduate level have likely already been submerged." },
      { type: 'p', text: "This is the \"survivor bias\" of the era of degree inflation. Media outlets love to report on \"Master's graduates delivering takeout\" because it creates contrast and generates traffic. But the media will not report on the ordinary undergraduates or vocational graduates who, lacking a high degree, cannot even get their resumes past the screening software and must compete with tens of thousands of others just to deliver takeout." },
      { type: 'p', text: "When high-degree talent begins to sink and seize positions originally belonging to those with lower degrees, this is called a \"dimensionality reduction attack.\"" },
      { type: 'p', text: "If a Master's graduate delivers takeout, it may be a helpless move for the moment, but they still retain the \"entry ticket\" (diploma) to high-end careers. Once the economy warms up, they can return to the office building at any time. For example, in the movie \"Upstream\" (逆行人生), the protagonist Gao Zhilei was once a senior programmer at a major internet company. Many watched the movie and sighed, \"Reading so many books just to deliver takeout?\" Wrong. This actually proves the safety net provided by education. For him, being a delivery rider is a temporary identity. That high-level diploma is his return ticket." },
      { type: 'h3', text: "Upward Social Mobility: The Only Legal Shortcut for Ordinary People" },
      { type: 'p', text: "We must acknowledge a reality: Chinese society is stratified. For the second-generation rich or officials, a degree might truly just be a piece of paper or a gilded decoration, because their parents have already accumulated enough resources, connections, and trial-and-error costs for them. They don't need a degree to change their destiny; their destiny was paved at birth." },
      { type: 'p', text: "But what about children from ordinary families? If your parents are farmers, workers, or ordinary clerks, and you do not enter the environment of higher education, the highest-level person you might meet in your life could be the village chief or the boss of a small local company." },
      { type: 'p', text: "Higher education is essentially the only way for ordinary people to access \"upward social networking.\" This isn't about sucking up to the powerful, but entering a field of \"high-density excellence.\"" },
      { type: 'p', text: "Taking the postgraduate entrance exam is not just for the knowledge in those few books; it is to change your environment and your comrades. When you enter a better university for graduate studies, you will find your mentor might be an industry authority whose recommendation letter is worth a thousand resumes. Your seniors might be in core departments of major companies, and their internal referral can get you past HR screening. This is your circle. Without that admission letter, that door is forever closed to you." },
      { type: 'h3', text: "A Degree is Not Just a Stepping Stone, It's a \"Moat\" Against Risk" },
      { type: 'p', text: "Some will say, \"But I know a boss who graduated from primary school and made a fortune.\" This is typical survivor bias. In the early chaotic era of reform and opening up, boldness could conquer the world. But now is the era of stock games, driven by technology and cognition." },
      { type: 'p', text: "Look at the campus recruitment lists for internet giants, financial institutions, and state-owned enterprises. \"Master's degree or above preferred\" has become an invisible threshold. Is this fair? Maybe not. But for companies, using degrees to screen talent is the lowest cost and highest efficiency method." },
      { type: 'p', text: "Degree devaluation is like currency inflation. When inflation happens, the smart move isn't to throw your money away (give up on degrees), but to try to earn more money (get a higher degree) to resist inflation." },
      { type: 'p', text: "Owning a high degree certainly doesn't guarantee you'll be rich, but it provides a \"bottom-line mechanism.\" It determines the lower limit of your fall. A person with a 985 Master's degree, even at their worst, can likely find a white-collar job in a first-tier city to maintain a decent life. An ordinary person without academic support, once facing an industry winter, may fall directly to the bottom of society without any buffer." },
      { type: 'h3', text: "Face Reality and Reject \"Pseudo-Effort\"" },
      { type: 'p', text: "The current situation for the postgraduate entrance exam is indeed incredibly difficult. It is a battle of gods. Millions of candidates crossing a single-plank bridge requires intellect, endurance, and information advantages." },
      { type: 'p', text: "We must admit that graduate education has problems: long duration, varying tutor quality, academic inflation. However, please do not use tactical diligence to cover up strategic laziness." },
      { type: 'p', text: "Many people shout \"degree devaluation\" simply to find a dignified excuse for their fear of hardship and competition. \"It's useless anyway, so why bother?\"—how many people use this sentence as a haven to escape reality?" },
      { type: 'p', text: "Stefan Zweig said: The true hero is the one who recognizes the truth of life and still loves it." },
      { type: 'p', text: "So, true clarity is seeing through the essence of degree inflation and still choosing to throw yourself into it to seize that only opportunity for upward mobility." },
      { type: 'p', text: "For ordinary people, fate has never prepared a second easy road. If you have a mine at home, feel free. If you are a genius like Steve Jobs, please ignore the degree. But if you are from a humble background with no one to rely on, please remember: In today's China, higher education is still the investment with the highest cost-performance ratio, bar none." },
      { type: 'p', text: "Do not think the gold rice bowl is worthless just because you see someone begging with it. On the contrary, when even gold bowls are used for begging, the iron bowl in your hand might not even qualify you to beg." }
    ]
  },
  {
    id: 2,
    title: "The Digital Trap: Short Video Addiction and Mental Health",
    excerpt: "Exploring the psychological impact of algorithmic content consumption and how short-form video platforms function as a modern form of digital dependency.",
    link: null,
    content: [
      { type: 'h3', text: "The Invisible Epidemic" },
      { type: 'p', text: "In the single second it took you to read this sentence, statistically, 1.16 Russians are frantically digging in the woods near Moscow or the frozen snows of St. Petersburg. They are not hunting for truffles or archaeological artifacts; they are digging for \"treasure\"—Mephedrone wrapped in colorful tape, buried underground." },
      { type: 'p', text: "Currently, in Russia, you can see beautiful young women and handsome men posting videos of themselves using Mephedrone on social media, thinking it is \"cool.\" But this synthetic drug, known locally as \"Mef\" or \"Salt,\" is silently devouring the next generation. It smells like cat urine, looks like MSG, is cheap and easy to obtain. Young people who use it can be seen convulsing on the streets, self-harming due to hallucinations, or standing frozen like zombies. One moment a blooming teenager, the next a biologically \"ruined person.\"" },
      { type: 'p', text: "Watching our neighbors dig in the snow like beasts, we should feel fortunate. In China, our strike against this destruction is thunderous. We have established one of the world's strictest anti-drug systems. Under the Law on Public Security Administration Punishments, drug use leads to detention and fines." },
      { type: 'p', text: "But legal punishment is just the beginning. The real punishment is \"Social Death.\" Once your identity is linked to drugs, life enters \"Hard Mode\": constant surveillance alarms when traveling, inability to enter public service or large enterprises, and the alienation of friends and family. Should we sympathize with them? No. This is the price adults pay for their choices. Any leniency towards drug users is disrespect to the police who sacrifice their lives on the front lines." },
      { type: 'h3', text: "The \"Soft Drug\" We Ignore: The Algorithm" },
      { type: 'p', text: "While we are strictly guarding against physical drugs, many parents fall into a huge cognitive trap. They stare at \"video games\" as if they were monsters, yet show surprising tolerance for the constantly scrolling screen in their child's hand—short videos—even treating it as a \"babysitting tool.\"" },
      { type: 'p', text: "Most video games are created for interactive art, logic training, or cultural promotion. But the design logic of short video platforms is essentially a digital version of the psychological \"Skinner Box\" experiment." },
      { type: 'p', text: "It uses big data to understand your weaknesses better than your mother does. It requires no thought or effort; you just open your mouth, and the algorithm feeds you carefully modulated \"mental opium\"—passive dopamine feeding." },
      { type: 'h3', text: "Danger 1: The Gene-Level Castration of Values" },
      { type: 'p', text: "For traffic, what does the algorithm recommend? Not dry knowledge, but sensory stimulation. Screens are filled with \"edge-ball\" content—suggestive dancing and behavior. Adults spend monthly salaries to tip streamers for a smile; teenagers, before learning how to love, learn how to twist their bodies for attention." },
      { type: 'p', text: "The algorithm is reshaping young people's worldview: it tells them studying is bitter and work is tired, but becoming \"red\" (famous) is easy. It creates an illusion of get-rich-quick success—no talent needed, just dare to expose yourself or act foolishly. This is a gene-level castration of the human struggling spirit." },
      { type: 'h3', text: "Danger 2: The Collapse of Language" },
      { type: 'p', text: "Have you noticed that people can no longer speak properly? Upon seeing beautiful scenery, they don't use poetic language, but shout vulgar slang. Emotions are not articulated logically but expressed through internet memes. This \"linguistic poverty\" reflects \"thinking poverty.\" Short videos do not need logic, only emotion. Long-term immersion degrades the language system, leading to a loss of ability to read long texts or think deeply." },
      { type: 'h3', text: "Danger 3: \"Popcorn Brain\" and the Destruction of Focus" },
      { type: 'p', text: "This is the most terrifying point. The logic of short videos is a reversal every 15 seconds, a climax every 3 seconds. If it doesn't grab you instantly, you swipe away." },
      { type: 'p', text: "Over time, the brain is trained into a \"high frequency, low quality\" receiving mode—the \"Popcorn Brain.\" The threshold for stimulation becomes incredibly high. Ask a child used to TikTok to read a classic novel like *War and Peace* or solve a complex math problem, and they will feel physiological discomfort. It's not that they are stupid or lazy; their neural circuits have been reshaped by algorithms. They have lost the ability for deep focus, which is the foundation of all creative work." },
      { type: 'h3', text: "The Algorithm's Sickle and Our Silence" },
      { type: 'p', text: "Physical drugs have police to catch them. But the creators of these \"mental drugs\"—tech giants with top algorithms—often dance on the edge of regulation. They hire top experts with million-dollar salaries to study one thing: how to make you stay for one more second." },
      { type: 'p', text: "We teach children to stay away from illegal drugs because they rot the body. But if we allow ourselves and our children to immerse in low-quality short videos every day, salivating at edge-ball livestreams and giggling at brainless memes, we are personally destroying the future of our brains." },
      { type: 'p', text: "That is another form of \"Brain Death.\"" },
      { type: 'p', text: "Starting today, try to put down the phone. Read a boring but profound book, play a game that requires brainpower, stare blankly in a park, or just look at the real world. The pain of social friction and the boredom of daily discipline are where true growth begins." }
    ]
  },
  {
    id: 3,
    title: "Deconstructing Family Dynamics: The Impact of Suppressive Parenting",
    excerpt: "A deep dive into 'origin families' and suppressive educational methods, questioning the unconditional nature of parental love and its long-term effects.",
    link: null,
    content: [
      { type: 'h3', text: "The Myth of \"No Wrong Parents\"" },
      { type: 'p', text: "In the context of traditional Chinese family education, there is a sentence that is regarded as absolute truth, allowing no doubt: \"There are no parents in the world who are wrong.\"" },
      { type: 'p', text: "No matter what parents do, as long as they add the phrase \"I did it for your own good,\" all harm seems to be instantly rationalized. If you feel pain, you are labeled as \"immature\" or \"too fragile.\"" },
      { type: 'p', text: "But in countless late nights, thousands of \"children\" (even those aged 30 or 40) may have silently asked the same question: \"If they really love me, why do I feel so suffocated?\"" },
      { type: 'p', text: "Today, we face a cruel but necessary topic: Do all parents really love their children? Is so-called \"suppressive education\" a well-intentioned effort, or a cycle of unconscious trauma?" },
      { type: 'h3', text: "Clipping Your Wings, Then Blaming You for Not Flying" },
      { type: 'p', text: "The logic of suppressive education is weirdly circular: Nitpick -> Belittle -> Deny -> Nitpick again." },
      { type: 'p', text: "If you score 98 on a test, they won't look at the 98, but stare at the missing 2: \"Why so careless? Look at Xiao Ming next door with his 100.\" If you buy new clothes happily, they say: \"That color makes you look dark; you're already fat, who gave you the confidence to wear that?\" If you get promoted, they coldly reply: \"Don't get cocky, there are plenty of people better than you.\"" },
      { type: 'p', text: "They call this \"frustration education,\" claiming they are pouring cold water on you to keep you sober. But the truth is, people soaked in ice water for too long don't get sober; they get hypothermia." },
      { type: 'p', text: "The core of this method is not to make the child better, but to establish authority. Through constant suppression, parents subconsciously convey: \"You are no good. Without me, you are nothing.\" They clip the child's wings, trample their confidence into the mud, and then point at the child lying on the ground and sigh: \"Look at you, so useless, you can't even fly.\"" },
      { type: 'h3', text: "Tearing Someone's Umbrella Because You Got Soaked" },
      { type: 'p', text: "Why do such parents exist? We must unveil the warm mask and face a biological and sociological reality: Having children is a reproductive instinct, but educating children is a system engineering project with a high threshold." },
      { type: 'p', text: "In this world, you need a license to drive or practice medicine, but \"being a parent\"—the hardest job in the world—requires no exam. Many adults are physically mature but psychologically infants. They conform to the social clock and bring a child into the world without being ready to hold up another life." },
      { type: 'p', text: "This immaturity leads to \"Trauma Projection.\" Many parents grew up in environments of suppression or neglect. Their inner wounds never healed. When facing a weak child, their defense mechanisms trigger: Jealousy and Compensation (destroying the happiness they never had) or Emotional Dumping (using the child, the lowest in the family power chain, as a punching bag)." },
      { type: 'p', text: "The whip they wave at you is actually the one their parents waved at them. It is an unconscious intergenerational revenge." },
      { type: 'h3', text: "Love is Not a Transaction" },
      { type: 'p', text: "We must clarify: opposing suppressive education is not advocating for spoiled indulgence. True love includes discipline and rules. But discipline points to behavior correction based on respect; suppression points to personality humiliation based on control." },
      { type: 'p', text: "The scariest parents treat children as \"financial products.\" Their investment (money, energy) is secretly price-tagged. When you make them look good, they love you (the investment gained value). When you are mediocre, they are angry (the investment lost money). This love is conditional. It is a transaction." },
      { type: 'h3', text: "Self-Rescue for Survivors" },
      { type: 'p', text: "Admitting \"my parents might not love me that much\" or \"they don't have the capacity to love me\" is terrifying. It overthrows the worldview established since childhood. But seeing the truth is the start of healing." },
      { type: 'p', text: "If you are in the shadow of suppressive education: 1. Stop proving yourself. To them, your success is luck, your failure is inevitable. 2. See their limitations. Understand their suppression comes from their incompetence, not your fault. 3. Re-parent yourself. Be your own spiritual parent." },
      { type: 'p', text: "We discuss this not to create hatred, but to untie the knot. Being a parent requires practice. The standard for love is simple: Love is always feeling you haven't given enough; non-love is always feeling you've lost money." }
    ]
  },
  {
    id: 4,
    title: "Patriotism: When Did It Become a Performance?",
    excerpt: "Discussing the distinction between healthy national pride and extreme sentiment, advocating for a form of patriotism rooted in reason rather than hostility.",
    link: null,
    content: [
      { type: 'h3', text: "The Traffic Business of Hate" },
      { type: 'p', text: "On today's internet, a strange kind of \"political correctness\" seems popular: the louder the voice, the more patriotic it seems; the more extreme the rhetoric, the firmer the stance. Especially regarding topics involving China-Japan relations, which are often huge traffic black holes. Glaring at the camera, denouncing Japan, or even morally judging owners of Japanese cars can quickly garner hundreds of thousands of likes and the label of \"positive energy.\"" },
      { type: 'p', text: "But behind this seemingly boiling blood, should we calm down and ask: Is this really patriotism? Or are some people using the public's simple emotions to harvest blood-stained traffic? If patriotism requires indiscriminate hatred or harming the innocent, then this \"patriotism,\" as Samuel Johnson said, becomes the \"last refuge of a scoundrel.\"" },
      { type: 'p', text: "We must admit a cruel reality: In the era of the attention economy, emotions can be monetized, and anger/anxiety spread fastest. For many so-called \"patriotic influencers,\" they care neither about national development nor historical truth; they care about algorithmic recommendation mechanisms. Rational analysis has a high threshold and low audience; extreme incitement has a low threshold and broad spread." },
      { type: 'p', text: "They carefully craft \"hate scripts,\" simplifying complex international relations into binary slaughter. For these people, patriotism is not an -ism, but a business. As long as hate brings clicks and sells cheap liquor in their shop window, they will not hesitate to inject the public with adrenaline." },
      { type: 'h3', text: "The Magic Reality of \"Offshore Patriotism\"" },
      { type: 'p', text: "The most ironic scenes often occur in the private lives of these \"fighters.\" We often see bloggers who indignantly denounce Western cultural corruption in videos, yet send their children to Ivy League schools; they denounce Japan but buy property in Tokyo; they call for \"internal circulation\" while enjoying life overseas with earned money. Internationally, this is called \"Offshore Nationalism.\"" },
      { type: 'p', text: "Why this split? Because they know clearly: inciting hate is a show for others to protect their rice bowl, while sending children away is leaving a way out for themselves. This behavior is not only a blasphemy against patriotism but an insult to the intelligence of countless sincere patriots." },
      { type: 'h3', text: "Remembering History, Not Creating New Tragedies" },
      { type: 'p', text: "Should we forget the blood debts of history? Absolutely not. The historical scars between China and Japan are objective and painful memories. The Nanjing Massacre and Unit 731 must be remembered forever. Forgetting history means betrayal." },
      { type: 'p', text: "But what is the purpose of remembering? It is for self-improvement, to prevent tragedy from recurring, to make our country strong enough not to be bullied. It is absolutely not to turn us into irrational mobs. If we attack lawful Japanese restaurants or smash compatriots' Japanese cars because we hate Japanese militarism, how are we different from the barbarians we hate?" },
      { type: 'p', text: "Nietzsche said: \"He who fights with monsters should look to it that he himself does not become a monster.\" Extreme xenophobia creates a terror atmosphere where rational voices disappear and investment confidence shakes. Ultimately, foreign capital leaves, jobs decrease, and our own people suffer." },
      { type: 'h3', text: "Confidence is the Mindset of a Great Nation" },
      { type: 'p', text: "True patriotism does not need to prove itself by belittling others. A truly powerful country has citizens who are confident, inclusive, and calm. We use other countries' products because they are good, but that doesn't stop us from innovating to surpass them. We welcome tourists to show the vastness of Chinese civilization, not to humiliate them." },
      { type: 'p', text: "We love this country because this land raised us. Patriotism should be a constructive force driving us to work hard, improve society, and help compatriots. It should never be cheaply sold or used as a sickle for traffic harvesting. True patriotism is making yourself strong, not making others feel fear." }
    ]
  },
  {
    id: 5,
    title: "Is AI a Giant Bubble? The Silence Behind the Hype",
    excerpt: "An analysis of the gap between AI hype and real-world implementation, examining why LLMs haven't yet saturated everyday businesses like local retail.",
    link: null,
    content: [
      { type: 'h3', text: "The Silence After the Storm" },
      { type: 'p', text: "Recently, the wind in Silicon Valley and Wall Street seems to have changed. A year ago, people discussed whether ChatGPT would end human civilization; a year later, the capital market is quietly calculating: how much real productivity has the billions of dollars in GPU and electricity investment returned?" },
      { type: 'p', text: "In the news, AI is advancing wildly: Sora's videos are indistinguishable from reality, and Nvidia's market cap is skyrocketing. But in reality, there is a strange \"silence.\" Ask a logistics boss or a restaurant manager: \"Has AI changed your business?\" The answer is often silence or a shake of the head: \"Tried it, it's just okay.\"" },
      { type: 'p', text: "This huge contrast forces us to face a glaring question: Is the current AI wave a giant bubble?" },
      { type: 'h3', text: "The Giant's Arms Race vs. The Commoner's Reality" },
      { type: 'p', text: "The current AI boom presents an extremely torn \"inverted pyramid\" structure. At the top are tech giants like Microsoft and Google, betting billions in a \"computing power arms race.\" For them, it's a must-play game. But at the base—the millions of SMEs—AI remains an \"expensive toy.\"" },
      { type: 'p', text: "Why? 1. Non-linear Cost Thresholds: Hiring an AI expert costs more than an SME's entire IT budget. 2. Data Silos: AI is knowledgeable but doesn't know your company's private data (orders in Excel, notes on paper). 3. Asymmetric Fault Tolerance: Google can afford AI hallucinations; a small tax firm cannot afford a wrong calculation." },
      { type: 'h3', text: "Looking for Nails with a Hammer" },
      { type: 'p', text: "A significant feature of a bubble is supply far exceeding real demand. The AI field has built a \"peerless hammer\" (LLMs) and everyone is frantically looking for nails. But many problems don't need this hammer. Do you really need a hundred-billion-parameter model to write a leave request? Often, simple rule engines work better and cheaper." },
      { type: 'p', text: "This has led to \"application layer desertification.\" Apart from a few killer apps like ChatGPT, we haven't seen national-level AI apps that change lifestyles like Uber or WeChat did. Capital expects an \"iPhone moment,\" but we are seeing a \"Blackberry moment\"—cool tech, narrow audience." },
      { type: 'h3', text: "Bubbles are the Path to Maturity" },
      { type: 'p', text: "Does this mean AI is a scam? Absolutely not. Historically, every great tech revolution is accompanied by a huge bubble. The Dot-com bubble burst, but the internet didn't die; on the ruins, giants like Amazon and Google rose. AI is currently at the peak of the \"Peak of Inflated Expectations\" in the Gartner Hype Cycle." },
      { type: 'p', text: "Current bubbles are paying for the future. The giants' excess computing power is building future infrastructure. The current \"pseudo-demands\" are filtering out real scenarios." },
      { type: 'h3', text: "From \"Toy\" to \"Tool\"" },
      { type: 'p', text: "We feel AI is useless now because it isn't \"invisible\" enough yet. When electricity was invented, it was a luxury bubble until it became background infrastructure. AI's future lies not in chatting with it, but in its invisibility." },
      { type: 'p', text: "When an ERP system automatically adjusts stock based on weather without the boss knowing it's AI; when AI in Photoshop is just a handy brush, not a prompt box; when customer service AI can understand dialects and emotions—that is when AI truly enters industry." },
      { type: 'p', text: "So, is AI a bubble? Yes, a big one. But this isn't shameful. Every leap in human technology steps up on the fragments of bubbles. As the investment saying goes: \"When no one realizes it's a bubble, it's the peak; when everyone says it's a bubble, it has just begun.\"" }
    ]
  },
  {
    id: 6,
    title: "Are Imported Products Really Better? A Rational Look at Consumer Psychology",
    excerpt: "How marketing strategies exploit emotional vulnerabilities and practical steps to regain control over spending habits and combat consumerist anxiety.",
    link: null,
    content: [
      { type: 'h3', text: "The Psychological Roots of \"Worshipping Foreign Goods\"" },
      { type: 'p', text: "Standing in front of a supermarket shelf, a mother hesitates between domestic and imported milk powder. Finally, she chooses the import. This scene plays out in millions of Chinese families. A hidden belief is deeply rooted: imported is safer." },
      { type: 'p', text: "Why? 1. Deep Trauma from Domestic Food Safety Incidents: The 2008 Melamine scandal was a catastrophe for China's food industry, destroying basic trust in the word \"Domestic.\" When confidence collapsed, imported brands filled the void. 2. Availability Bias: Negative news about domestic products is amplified, while safe products are ignored. 3. The Sheep Effect: High prices of imports reinforce the \"high price = high quality\" stereotype." },
      { type: 'p', text: "However, some consumers are harvested by \"fake foreign brands\"—products made in domestic factories, shipped to Europe for a \"bath,\" and shipped back with a \"Made in XXX\" label." },
      { type: 'h3', text: "The Gap Between Reality and Perception" },
      { type: 'p', text: "Data tells a different story. In 2013, inspections showed 16 domestic brands met standards, while 3 out of 9 original imported products failed. In 2014, the pass rate for domestic infant formula was 99.23%. Domestic quality has stabilized." },
      { type: 'p', text: "Imported food also has issues. The US FDA issues recalls daily. Even Haagen-Dazs recalled products for labeling errors. Imports are not flawless white knights." },
      { type: 'h3', text: "The Truth Behind Regulatory Systems" },
      { type: 'p', text: "It is true that import checks are stricter. Why? Because of information asymmetry. Regulators know less about foreign supply chains, so they must check more strictly (batch-by-batch for unlisted foods). Domestic foods use risk-based classification management." },
      { type: 'p', text: "However, the responsibility commitment of international brands is real. For multinationals, a quality scandal is devastating. In the US, a recall can bankrupt a company, so they have sensitive self-correction mechanisms. This active recall culture is something domestic SMEs often lack." },
      { type: 'h3', text: "Towards Rational Consumption" },
      { type: 'p', text: "We should learn to check official data (SAMR reports) rather than relying on anxiety. We should evaluate brand reputation—how have they handled past issues? We should diversify choices rather than blindly tilting to one side." },
      { type: 'p', text: "The answer to \"Is imported better?\" is: Not necessarily. Good and bad products exist on both sides. The key is corporate responsibility and rational judgment. Mature consumption is no longer being confused by nationality labels, but understanding data and value. This is true \"worship\"—worshipping rationality, transparency, and responsibility." }
    ]
  }
];

// --- COMPONENTS (Defined BEFORE App) ---

const Navigation = ({ activeSection, scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen, onLogoClick }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <User size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
    { id: 'articles', label: 'Articles', icon: <BookOpen size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-xl font-bold shimmer-text">
              Alex-lirio-lucian.wonderland
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-slate-800 scale-105'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  activeSection === item.id
                    ? 'text-white bg-slate-800'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ scrollToSection }) => (
  <section id="home" className="min-h-screen relative flex items-center justify-center pt-16 overflow-hidden z-10">
    <style>
      {`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .shimmer-text {
          color: transparent;
          background-image: linear-gradient(90deg, #60a5fa, #c084fc, #60a5fa, #c084fc);
          background-clip: text;
          -webkit-background-clip: text;
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
      `}
    </style>

    {/* iOS Style Glass Card */}
    <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-8 md:p-16 transition-transform hover:scale-[1.01] duration-500 animate-fade-in-up">
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-sm shimmer-text">
          Building the future of us.
        </h1>
        
        <p className="mt-6 text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light shimmer-text">
          {USER_INFO.bio}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 backdrop-blur-md border border-white/20"
          >
            View Work <ChevronRight size={18} />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all backdrop-blur-md"
          >
            Contact Me
          </button>
        </div>
        
        <div className="mt-12 flex justify-center space-x-8">
          <a href={USER_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all transform hover:scale-110">
            <Github size={28} />
          </a>
          <a href={USER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all transform hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href={`mailto:${USER_INFO.email}`} className="text-slate-400 hover:text-white transition-all transform hover:scale-110">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ProjectsList = () => (
  <section id="projects" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative z-10 flex items-center">
    <div className="max-w-6xl mx-auto w-full">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-8 md:p-12 transition-transform duration-500">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 shimmer-text">Featured Projects</h2>
          <p className="max-w-2xl text-lg font-light shimmer-text">
            A selection of my recent work.
          </p>
        </div>
        
        {PROJECTS.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
                <div key={project.id} className="group bg-slate-800/40 rounded-xl border border-white/5 hover:border-blue-500/50 transition-all hover:bg-slate-800/60 overflow-hidden flex flex-col hover:-translate-y-1 duration-300">
                <div className="p-6 flex-1">
                    <div className="w-12 h-12 bg-slate-900/80 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                    {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                    </h3>
                    <p className="text-slate-400 mb-6 line-clamp-3">
                    {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-md bg-slate-900/80 text-slate-300 border border-white/10">
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
                <div className="p-4 border-t border-white/5 bg-slate-900/20">
                    <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                    View Project <ExternalLink size={14} />
                    </a>
                </div>
                </div>
            ))}
            </div>
        ) : (
             <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                 <div className="inline-block p-6 bg-slate-800/50 rounded-full mb-6 border border-white/10">
                   <Construction size={48} className="text-blue-400 animate-pulse" />
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-4">Projects Coming Soon</h3>
                 <p className="text-slate-400 text-lg font-light max-w-lg mx-auto">
                    I am currently updating my project showcase with my latest work. Please check back later!
                 </p>
            </div>
        )}
      </div>
    </div>
  </section>
);

const ArticleReader = ({ article, onBack }) => (
  <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in relative z-50">
    <div className="backdrop-blur-xl bg-slate-900/90 border border-white/10 shadow-2xl rounded-3xl p-8 md:p-16">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Articles
      </button>
      
      <article className="prose prose-invert prose-lg max-w-none">
        <div className="mb-8 border-b border-white/10 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight shimmer-text">
            {article.title}
          </h1>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          {article.content && Array.isArray(article.content) ? (
            article.content.map((block, index) => {
              if (block.type === 'h3') {
                return <h3 key={index} className="text-2xl font-bold text-white mt-12 mb-4">{block.text}</h3>;
              }
              return <p key={index} className="mb-4 text-lg font-light leading-8">{block.text}</p>;
            })
          ) : (
            <p className="italic text-slate-500">Content loading...</p>
          )}
        </div>
      </article>
    </div>
  </section>
);

const ArticlesList = ({ onSelectArticle }) => (
  <section id="articles" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative z-10 flex items-center">
    <div className="max-w-4xl mx-auto w-full">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-8 md:p-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 shimmer-text">Latest Writing</h2>
          <p className="text-lg font-light shimmer-text">
            Thoughts on software engineering, education, and industry trends.
          </p>
        </div>

        <div className="space-y-6">
          {ARTICLES.map((article) => (
            <article key={article.id} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-800/40 border border-white/5 hover:bg-slate-800/60 transition-all hover:scale-[1.01] duration-300 cursor-pointer"
            onClick={() => {
                if (article.content) {
                  onSelectArticle(article);
                } else if (article.link) {
                  window.open(article.link, '_blank');
                }
              }}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 hover:text-blue-400 transition-colors shimmer-text">
                  {article.title}
                </h3>
                <p className="text-slate-400 mb-4 line-clamp-2 text-base font-light">
                  {article.excerpt}
                </p>
                <button 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  Read Article <ChevronRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative z-10 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-8 md:p-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 shimmer-text">Get In Touch</h2>
            <p className="max-w-lg mx-auto text-lg font-light shimmer-text">
              Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="flex flex-col items-center text-center gap-6 group p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
              <a 
                href={`mailto:${USER_INFO.email}`} 
                className="p-5 bg-blue-500/20 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 cursor-pointer shadow-lg hover:shadow-blue-500/30"
                aria-label="Send email"
              >
                <Mail size={32} />
              </a>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Email</h3>
                <p className="text-slate-400 text-sm font-light break-all">{USER_INFO.email}</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center text-center gap-6 group p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
              <a 
                href={USER_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-5 bg-blue-500/20 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 cursor-pointer shadow-lg hover:shadow-blue-500/30"
                aria-label="Visit LinkedIn Profile"
              >
                <Linkedin size={32} />
              </a>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">LinkedIn</h3>
                <p className="text-slate-400 text-sm font-light">Professional Profile</p>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex flex-col items-center text-center gap-6 group p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
              <a 
                href={USER_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-5 bg-blue-500/20 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 cursor-pointer shadow-lg hover:shadow-blue-500/30"
                aria-label="Visit GitHub Profile"
              >
                <Github size={32} />
              </a>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">GitHub</h3>
                <p className="text-slate-400 text-sm font-light">Code Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900/80 backdrop-blur-md border-t border-white/5 py-8 relative z-10">
    <div className="max-w-6xl mx-auto px-4 text-center text-slate-500 text-sm">
      <p>&copy; {new Date().getFullYear()} {USER_INFO.name}. All rights reserved.</p>
    </div>
  </footer>
);

// --- 3. MAIN APP COMPONENT ---

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setSelectedArticle(null); // Close article view when navigating
  };

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'articles', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for sticky header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Back handler for article reader
  const handleBackFromArticle = () => {
    setSelectedArticle(null);
    // Slight timeout to let render finish before scrolling back
    setTimeout(() => {
        const element = document.getElementById('articles');
        if (element) element.scrollIntoView({ behavior: 'auto' });
    }, 10);
  };

  // Dynamic Background Colors based on Section
  const getBackgroundColors = () => {
    switch (activeSection) {
      case 'home':
        return {
          blob1: 'bg-purple-600/20',
          blob2: 'bg-blue-600/20',
          blob3: 'bg-indigo-900/20'
        };
      case 'projects': // Vibrant/Active
        return {
          blob1: 'bg-cyan-500/20',
          blob2: 'bg-pink-500/20',
          blob3: 'bg-yellow-500/10'
        };
      case 'articles': // Deep/Profound
        return {
          blob1: 'bg-indigo-950/40',
          blob2: 'bg-slate-900/40',
          blob3: 'bg-violet-900/30'
        };
      case 'contact':
        return {
          blob1: 'bg-blue-500/20',
          blob2: 'bg-teal-500/20',
          blob3: 'bg-slate-800/30'
        };
      default:
        return {
          blob1: 'bg-purple-600/20',
          blob2: 'bg-blue-600/20',
          blob3: 'bg-indigo-900/20'
        };
    }
  };

  const bgColors = getBackgroundColors();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden relative transition-colors duration-1000">
      
      {/* Define styles globally so they work even when Hero is unmounted (in reader view) */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .shimmer-text {
            color: transparent;
            background-image: linear-gradient(90deg, #60a5fa, #c084fc, #60a5fa, #c084fc);
            background-clip: text;
            -webkit-background-clip: text;
            background-size: 200% auto;
            animation: shimmer 3s linear infinite;
          }
        `}
      </style>

      {/* GLOBAL BACKGROUND - Fixed position to stay behind scrolling content */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse transition-colors duration-1000 ${bgColors.blob1}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse delay-1000 transition-colors duration-1000 ${bgColors.blob2}`}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] transition-colors duration-1000 ${bgColors.blob3}`}></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        onLogoClick={() => scrollToSection('home')}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      {/* If article is selected, show Reader Overlay on top of everything, else show scrolling page */}
      {selectedArticle ? (
        <div className="relative z-20">
            <ArticleReader article={selectedArticle} onBack={handleBackFromArticle} />
        </div>
      ) : (
        <main className="relative z-10">
          <Hero scrollToSection={scrollToSection} />
          <ProjectsList />
          <ArticlesList onSelectArticle={setSelectedArticle} />
          <Contact />
          <Footer />
        </main>
      )}

    </div>
  );
}