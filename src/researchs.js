import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './page.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.png';
import img5 from './img/img5.jpg';
import img6 from './img/img6.png';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.png';

const items= [
  {
      image: img1,
      title: 'Towards adopting AI techniques for monitoring social media activities',
      date: '1 JAN, 2021',
      authors: 'Lina Muhammad Al-Ghamdi',
      description: 'The integration of artificial intelligence (AI) into social media platforms is revolutionizing the way businesses market and interact online. Companies leveraging AI for marketing purposes on social media are seeing a remarkable threefold increase in benefits compared to their non-AI counterparts. The SIA monitoring platform of Socia media that helps provide brands with the following services through:Listening to what customers say,Discovering negative conversations that may tarnish the brand reputation ,Spying on competitors to ensure that the brand is on top of the market game, Continuously improving social media strategy. Furthermore, AI is playing a pivotal role in upholding user privacy and data security within social networking sites. By employing AI-driven algorithms, companies can better safeguard user information, ensuring a more secure digital environment for all stakeholders involved. Looking ahead, it is imperative to continue advancing AI mechanisms within social media platforms to maximize their potential. This entails conducting further research to understand AI precise impact on revenue generation and cost reduction in the realm of social media. Additionally, robust experimentation and statistical analysis are needed to comprehensively evaluate AI effects on both users and marketers.',
      referenceLink: 'https://sei.ardascience.com/index.php/journal/article/view/121/126'
  },
  {
      image:img2,
      title: 'Role of Artificial Intelligence in Social Media and Human Behaviour',
      date: '1 OCT, 2021',
      authors: 'Smitarani Satpathy, Srikanta Patnaik',
      description: 'Discussed about-Types of AI Implementation,AI in Social Media,Social Media Analytics and Intelligence Research,Used statistical data,Social media and the role of AI in social sites may have some limitations. To overcome from that problem, we will propose a model for our future work. The paper has some survey on social media and use of AI in social media marketers as well as the companies. Influence of social media in our day-to-day life is unstoppable. To see the current situation, companies should take some necessary action on the basis of privacy and security of data. For this purpose, companies are more concern and limiting to use their information to access research freely. ',
      referenceLink: 'https://zenodo.org/record/5606510/files/A19261010120.pdf'
  },
  {
      image:img3,
      title:'A Review on Impact of AI on Social Media',                       
      date:'1 JAN, 2024',
      authors:'Trupti Bansode,Pooja Kannaujiya, Dr. Harshali Patil,Dr. Jyotshna Dongardive',
      description:'Artificial intelligence is changing every aspect of life and helps solve complex problems with its many application. In today’s world, there is no need for evidence to support the dissemination of intelligence. With the help of AI business owners can find leads, create content, and track sales. Partnerships with intelligence can help marketers, individuals, and advertising organizations increase the effectiveness of marketing campaigns. At the same time, machine learning models, advanced analytical tools and deep learning network algorithms manage to increase the benefits of using social intelligence. The potential and popularity of AI is increasing. Artificial Intelligence has grown tremendously in the last few years and has application in almost every industry/field. The reach of AI has spread to all areas of life , but its application in the business world has also become deeper. Over the years ,influncer, content creators and audiences have witnessed rapid change. For social media user, now is the best time to witness the further growth of this industry. AI has widened its reach in all the fields of life, but has made its way deeper in the marketing sector. NEED OF AI IN SOCIAL MEDIA -Create and Manage Social Media Content,Compile Social Media Knowledge and Engage in Social Listening,Optimizing and Managing Social Media Ads,Finding Right Influencer. DIFFERENT SOCIAL MEDIA PLATFORMS USING AI-,Facebook,Instagram,YouTube,TikTok,Pinterest,LinkedIn, etc.',
      referenceLink:'https://www.ijcrt.org/papers/IJCRT2401005.pdf'
  },
  {
      image:img4,
      title: 'Artificial Intelligence trends in education',                         
      date: '26 SEPT, 2018',
      authors:'Maud Chassignol, Aleksandr Khoroshavi,Alexandra Klimova,Anna Bilyatdinova',
      description:'Discussed about:Communication: using intelligent tutoring systems for appropriate feedback, Assessment as a way to track students’ performance,Teaching methods: from personalized learning to educational robots.The impact of Artificial Intelligence on education, highlighting its potential to revolutionize learning processes. It suggests that while AI wont completely replace traditional education methods, it will significantly reshape the educational landscape, similar to the integration of gamification and VR/AR technologies. AI enables the development of massive open online courses (MOOCs), streamlining tasks like assignment assessment and identifying learning gaps. However, it cautions that AI-based assessment systems may overlook unique solutions, requiring human oversight for accuracy. Intelligent tutoring systems create personalized learning environments by generating digital student profiles and offering tailored instruction, potentially increasing productivity in and out of the classroom. Also, AI can assist students with specific learning difficulties, such as dyslexia, by providing customized learning strategies. ',
      referenceLink:'https://www.sciencedirect.com/science/article/pii/S1877050918315382'
  },
  {
      image:img5,
      title:'Artificial Intelligence in Social Media',
      date:'JAN – FEB 2021',
      authors:'Matthew N. O. Sadiku, Tolulope J. Ashaolu,Abayomi Ajayi-Majebi,Sarhan M. Musa',
      description:'Discussed about-Forms of AI that are most commonly used in applications -Expert systems-Fuzzy logic-Neural networks-Machine learning-Deep learning-Robots, etc. Applications of AI in social media, Benefits of AI,Future of Industrial AI. Artificial intelligence is an umbrella term that covers many different technologies such as like machine learning, expert systems, robotics, computer vision, natural language processing, and more. Many companies already realize that AI is the way forward for progressing business. AI will continue to influence social media networks as the technology develops and evolves. When it comes to AI in social media, the sky is the limit. The combination of AI and social media are proving to be greatly beneficial for businesses. The future is bright and exciting for any business that is harnessing AI tools.',
      referenceLink:' https://www.ijscia.com/wp-content/uploads/2021/01/Volume2-Issue1-Jan-Feb-No.36-15-20.pdf'
  },
  {
      image:img6,
      title:'Artificial intelligence: A powerful paradigm for scientific research',
      date:'October 28, 2021',
      authors:'Yongjun Xu, , Xin Liu, Xin Cao, Changping Huang, Enke Liu, Sen Qian, Xingchen Liu, Yanjun Wu, Fengliang Dong, Cheng-Wei Qiu, Junjun Qiu,Keqin Hua, Wentao Su, Jian Wu, Huiyu Xu,Yong Han, Chenguang Fu, Zhigang Yin, Miao Liu, Ronald Roepman, etc.',
      description:'Discussed about-AI IN INFORMATION SCIENCE,AI IN MATHEMATICS,AI IN MEDICAL SCIENCE,AI IN MATERIALS SCIENCE,AI IN GEOSCIENCE,AI IN PHYSICS,AI IN CHEMISTRY. The paper surveys AI extensive application across various sciences, highlighting ML pivotal role. Despite its widespread use, ML systems face security risks during training and execution phases. Adversarial attacks and data poisoning can compromise model accuracy, while model attacks like backdoors and model stealing threaten sensitive data leakage. Although defence techniques exist, the emergence of new attack models necessitates ongoing security measures. Moreover, maintaining model performance poses challenges due to shifts in data distribution over time, risking catastrophic forgetting where models lose previously learned features. To address this, researchers advocate for lifelong learning paradigms, enabling models to adapt continuously. By enhancing ML systems adaptability and resilience, researchers aim to tackle security threats and navigate dynamic real-world scenarios effectively.',
      referenceLink:'https://www.cell.com/action/showPdf?pii=S2666-6758%2821%2900104-1'


  },
  {
      image:img7,
      title:'Ethical Considerations in the Application of Artificial Intelligence to monitor Social media for Covid-19 data',
      date:'August 25,2022',
      authors:'Lidia Flores, Sean D. Young',
      description:'Discussed about- Dependency of Social Media and AI for Covid-19 data,About Belmen Port which was published to know the ethical principles of AI. As the application and utility of AI in COVID-19 social media data research continues to progress, investigators and ethics committees need to evolve alongside this technology. Social media health research has shown promising potential and is being utilized for HIV, observation of opioid usage across the US, and to understand COVID-19 perceptions. The introduction of AI methods to COVID-19 social media research brings forth new ethical concerns and potential harms that require addressing. Research principles from the Belmont Report may be utilized to establish best practices for utilizing social media data. Although the creation of standardized guidelines for the ethical conduct of research across institutions for digital tools presents challenges, it merits discussion to preserve the principles of respect for persons, beneficence, and justice. While principles found in the Belmont Report may guide this research, AI’s novelty and unique challenges present additional ethical questions. Potential harms such as constraints in informed consent, limited awareness of privacy settings, and restricted representativeness creates ethical concerns that require addressing. Future research, discussion, and attention are needed surrounding the ethics of AI outcomes and how they might be standardized and implemented as these technologies and methods continue to evolve. Evaluating AI-enabled COVID-19 social media research, through a human subject’s research lens, such as those found in the Belmont Report, may be a step forward in promoting and cultivating ethical practices.',
      referenceLink:'https://link.springer.com/article/10.1007/s11023-022-09610-0'
  },
  {
      image:img8,
      title:'A Review of AI-Driven Conversational Chatbots Implementation Methodologies and Challenges',
      date:'22 February 2023',
      authors:'Chien-Chang Lin, Anna Y. Q. Huang ,Stephen J. H. Yang ',
      description:'Discussed about- Overview of Conversational Chatbots Objectives of Conversational Chatbots Methods and Datasets of Conversational Chatbots Outcomes and Challenges of a Conversational Chatbox.The outcome of the algorithm or model optimization focuses on optimizing the algorithm techniques applied in chatbots, such as reinforcement learning, self-attention, transfer learning, or models such as LSTM, BERT, GPT-3, and NBT. The outcome of this portion is more focused on achieving the objectives of context maintenance in conversational chatbots. This, study found that increasing NLP (Natural Language Processing) technologies are being applied to architecture when building conversational chatbots. This may be because, by nature, we want chatbots to imitate human conversational capability, especially when designing an open-domain chatbot that does not have a pre-defined dialogue context; thus, the system needs to figure out and maintain consistency. Thus, there is another trend we sensed during review: when the fundamental goal is providing accurate information to the users through closed-domain chatbots, researchers are more interested in a dialogue system, which can express emotions and empathy. Some papers also highlighted some of the potential key challenges of conversational chatbots, such as how to achieve a system with human cognition capability or how to dynamically adjust the profile when the chatbot is playing the role of a learning companion or a student. This direction will add more features to a chatbot to output a good response during conversation and evaluate a user’s status to provide a better customized response. This can be leveraged in the educational support area to increase learning performance and teaching skills. ',
      referenceLink:'https://www.mdpi.com/2071-1050/15/5/4012'
  },
  {
      image:img9,
      title:'Effects of Generative Chatbots in Higher Education ',
      date:'7 September 2023',
      authors:'Galina Ilieva, Tania Yankova, Stanislava Klisarova-Belcheva, Angel Dimitrov, Marin Bratkov and Delian Angelov',
      description:'Discussed about-State-of-the-Art Review of Intelligent Chatbot Models, Platforms, and System Framework for Chatbot-Assisted University Teaching and Learning. Related Work Verification of the Proposed Chatbot-Based Teaching–Learning Framework.The new framework for AI-assisted university courses has been applied to study the effects of intelligent chatbots on electronic learning at Plovdiv University Paisii Hilendarski. The results indicate that a substantial number of students are aware of the educational potential of this emerging AI technology and have already used it. Our research also reveals that a significant majority of students (103 out of 131) demonstrated a strong intention to use AI chatbots and expressed high satisfaction with generative AI technologies. Students with a better understanding of the advantages of this technology tend to use it more frequently and express a greater intention to continue its usage. However, in terms of AIchatbots’ capabilities as an educational tool, instructors’ assessments of chatbots’ solutions are not impressive. In both tasks—Task #1 from Algebra and Task #2 from Financial Mathematics—only two (ChatGPT and ChatGPTPlus) out of seven chatbots received acceptable grades: 100% of the maximum possible points for Task 1, and 72.7% and 90.9% for Task #2, respectively. Here are some recommendations for management bodies, educators, and students regarding the proposed new framework for AI chatbot-assisted university courses. Universities should develop an AI adoption strategy at the institutional level. This strategy should include plans for investing in digital innovations and upgrading the digital skills of instructors and students. Unfortunately, there is a lack of research on the level of digital skills, and one needs to first establish what the current situation is. According to a recent study by the Organization for Economic Cooperation and Development (OECD), the digital skills of Bulgarian educators are not at a high level. Digitization, however, should not be an end in itself; instead, the pedagogical goals should take the lead. Moreover, many occupations are anticipated to become obsolete, while the number of digitally enabled professions and roles is expected to rise. This shift requires a significant number of individuals to undergo career transitions throughout their lifetime. To address these evolving conditions, universities should be prepared to offer suitable lifelong learning opportunities that incorporate the use of artificial intelligence.',
      referenceLink:'https://www.mdpi.com/2078-2489/14/9/492'
  },
  {
      image:img10,
      title:'The future of social media in marketing',
      date:'12 October 2019',
      authors:'Lauren Grewal,Rhonda Hadi, Andrew T. Stephen',
      description:'Discussed about-What is social media? Social media at present Overview of framework for the future of social media in marketing Omni-social presence The rise of new forms of social influence (and influencers) Privacy concerns on social media Combatting loneliness and isolation Integrated customer care Social media as a political tool Increased sensory richness Online/offline integration and complete converge Social media by non-humans.In reviewing the social media ecosystem and considering where it is heading in the context of consumers and marketing practice, we have concluded that this is an area that is very much still in a state of flux. The future of social media in marketing is exciting, but also uncertain. If nothing else, it is vitally important that we better understand social media since it has become highly culturally relevant, a dominant form of communication and expression, a major media type used by companies for advertising and other forms of communication, and even has geopolitical ramifications. We hope that the ideas discussed here stimulate many new ideas and research, which we ultimately hope to see being mentioned and shared across every type of social media platform.',
      referenceLink:'https://link.springer.com/article/10.1007/s11747-019-00695-1?error=cookies_not_support',
  }
];

const Researchs = () => {
  return (
    <div className="cont1">
      <h1 className="pg-title">Researches</h1>

      {items.map((item, index) => (
        <ResearchItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const ResearchItem = ({ item, index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="pg-item"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="pg-content">
      <div className="pg-img">
        <a href={item.referenceLink} target="_blank" rel="noopener noreferrer">
            <img src={item.image} alt={`Image ${index + 1}`} />
        </a>
        </div>
        <div className="pg-text">
          <h3>{item.title}</h3>
          <div className='dateauth'>
          <p className="authors">{item.authors}</p>
          <p className="date">{item.date}</p>
          </div>
          <p className='desc'>{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};


export default Researchs;
