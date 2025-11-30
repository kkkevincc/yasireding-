import { ExamModule } from './types';

const DEEP_SEA_MINING: ExamModule = {
  id: "reading-deep-sea",
  title: "Deep-sea mining",
  category: "Reading",
  passage: {
    title: "Deep-sea mining",
    subtitle: "Bacteria from the ocean floor can beat superbugs and cancer. But habitats are at risk from the hunger for marine minerals",
    paragraphs: [
      {
        id: "A",
        text: "When Professor Mat Upton found that a microbe from a deep-sea sponge was killing pathogenic bugs in his laboratory, he realised it could be a breakthrough in the fight against antibiotic-resistant superbugs, which are responsible for thousands of deaths a year in the UK alone. Further tests confirmed that an antibiotic from the sponge bacteria, found living more than 700 metres under the sea at the Rockall trough in the north-east Atlantic, was previously unknown to science, boosting its potential as a life-saving medicine. But Upton, and other scientists who view the deep ocean and its wealth of unique and undocumented species as a prospecting ground for new medicines, fear such potential will be lost in the rush to exploit the deep sea's equally rich metal and mineral resources."
      },
      {
        id: "B",
        text: "'We're looking at the bioactive potential of marine resources, to see if there are any more medicines or drugs down there before we destroy it for ever,' says Upton, a medical microbiologist at the University of Plymouth. He is among many scientists urging a halt to deep-sea mining, asking for time to weigh up the pros and cons. 'In sustainability terms, this could be a better way of exploiting the economic potential of the deep sea,' he argues. Oceanographers using remotely operated vehicles have spotted many new species. Among them have been sea cucumbers with tails allowing them to sail along the ocean floor, and a rare 'Dumbo' octopus, found 3,000 metres under the Pacific Ocean, off the coast of California. Any one of these could offer lifesaving potential. Upton estimates it could take up to a decade for a newly discovered antibiotic to become a medicine - but the race towards commercial mining in the ocean abyss has already begun."
      },
      {
        id: "C",
        text: "The deep sea contains more nickel, cobalt and rare earth metals than all land reserves combined, according to the US Geological Survey. Mining corporations argue that deepsea exploration could help diversify the supply of metals and point to the fact that demand for resources such as copper, aluminium, cobalt for electric car batteries and other metals to power technology and smartphones, is soaring. They say that deep-sea mining could yield far superior ore to land mining with little, if any, waste. Different methods of extraction exist, but most involve employing some form of converted machinery previously used in terrestrial mining to excavate materials from the sea floor, at depths of up to 6,000 metres, then drawing a seawater slurry, containing rock and other solid particles, from the sea floor to ships on the surface. The slurry is then 'de-watered' and transferred to another vessel for shipping. Extracted seawater is pumped back down and discharged close to the sea floor."
      },
      {
        id: "D",
        text: "But environmental and legal groups have urged caution, arguing there are potentially massive and unknown ramifications for the environment and for nearby communities, and that the global regulatory framework is not yet drafted. 'Despite arising in the last half century, the \"new global gold rush\" of deep-sea mining shares many features with past resource scrambles - including a general disregard for environmental and social impacts, and the marginalisation of indigenous peoples and their rights,' a paper, written by Julie Hunter and Julian Aguon, from Blue Ocean Law, and Pradeep Singh, from the Center for Marine Environmental Sciences, Bremen, argues. The authors say that knowledge of the deep seabed remains extremely limited. 'The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail, leading marine scientists to commonly remark that, with respect to the deep sea, \"We don't yet know what we need to know\".'"
      },
      {
        id: "E",
        text: "Scientific research - including a recent paper in Marine Policy journal - has suggested the deep seabed, and hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity and the global climate. The mineral-rich vents and their surrounds are also home to many well-known animals including crustaceans, tubeworms, clams, slugs, anemones and fish. 'It is becoming increasingly clear that deepsea mining poses a grave threat to these vital seabed functions,' the paper says. 'Extraction methods would produce large sediment plumes and involve the discharge of waste back into the ocean, significantly disturbing seafloor environments,' the paper continues. 'On deep sea vents, scientists are clear,' says Dr Jon Copley of the National Oceanography Centre, Southampton: 'we don't want mining on them.'"
      },
      {
        id: "F",
        text: "The oceans occupy around 70% of the planet and are relatively unexplored, says Mike Johnston, chief executive of Nautilus, a Canadian underwater exploration company: 'It makes sense to explore this untapped potential in an environmentally sustainable way, instead of continually looking at the fast depleting land resources of the planet to meet society's rising needs.' Those leading the global rush to place giant mining machines thousands of metres below the sea surface say the environmental impacts will be far lower than on land. But critics say exotic and little-known ecosystems in the deep oceans could be destroyed and must be protected. 'Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans,' according to hydrothermal vent expert Verena Tunnicliffe, at the University of Victoria in Canada. She argues that active vents must be off-limits for mining to protect the new knowledge and biotechnology spin-offs they can deliver, and that strict controls must be in place elsewhere."
      }
    ]
  },
  questionGroups: [
    {
      id: "g1",
      title: "Questions 14-17 (Matching)",
      instruction: "Reading Passage 2 has six paragraphs, A-F. Which paragraph contains the following information?",
      questions: [
        {
          id: 14,
          type: "matching",
          text: "reference to the rapidly increasing need for one raw material in the transport industry",
          answer: "C",
          explanation: "Paragraph C mentions: 'demand for resources such as... cobalt for electric car batteries... is soaring'. 'Rapidly increasing need' = 'soaring'. 'One raw material' = 'cobalt'. 'Transport industry' = 'electric car batteries'.",
          evidenceQuote: "demand for resources such as copper, aluminium, cobalt for electric car batteries and other metals to power technology and smartphones, is soaring",
          evidenceParagraphId: "C",
          keywords: ["rapidly increasing need", "transport industry", "cobalt", "electric car batteries"]
        },
        {
          id: 15,
          type: "matching",
          text: "a rough estimate of the area of the Earth covered by the oceans",
          answer: "F",
          explanation: "Paragraph F starts with: 'The oceans occupy around 70% of the planet'. 'Rough estimate' = 'around 70%'.",
          evidenceQuote: "The oceans occupy around 70% of the planet",
          evidenceParagraphId: "F",
          keywords: ["area of the Earth", "covered by oceans", "70%"]
        },
        {
          id: 16,
          type: "matching",
          text: "how a particular underwater habitat, where minerals and organisms co-exist, is formed",
          answer: "E",
          explanation: "Paragraph E explains: 'hydrothermal vents, which are created when seawater meets volcanic magma'. It mentions these places are home to 'mineral-rich vents' and 'animals'.",
          evidenceQuote: "hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity and the global climate",
          evidenceParagraphId: "E",
          keywords: ["underwater habitat", "formed", "created when"]
        },
        {
          id: 17,
          type: "matching",
          text: "reference to the fact that the countries of the world have yet to agree on rules for the exploration of the seabed",
          answer: "D",
          explanation: "Paragraph D states: 'the global regulatory framework is not yet drafted'. This implies countries haven't agreed on rules yet.",
          evidenceQuote: "the global regulatory framework is not yet drafted",
          evidenceParagraphId: "D",
          keywords: ["countries", "agree on rules", "regulatory framework", "not yet drafted"]
        }
      ]
    },
    {
      id: "g2",
      title: "Questions 18-23 (Matching People)",
      instruction: "Match each statement with the correct person or people, A-E.",
      questions: [
        {
          id: 18,
          type: "matching",
          text: "A move away from the exploration of heavily mined reserves on land is a good idea.",
          answer: "D",
          explanation: "Mike Johnston (D) says: 'It makes sense to explore this untapped potential... instead of continually looking at the fast depleting land resources'.",
          evidenceQuote: "It makes sense to explore this untapped potential in an environmentally sustainable way, instead of continually looking at the fast depleting land resources",
          evidenceParagraphId: "F",
          keywords: ["move away", "land resources", "heavily mined"]
        },
        {
          id: 19,
          type: "matching",
          text: "The negative effects of undersea exploration on local areas and their inhabitants are being ignored.",
          answer: "B",
          explanation: "Julie Hunter et al. (B) argue there is a 'general disregard for environmental and social impacts, and the marginalisation of indigenous peoples'.",
          evidenceQuote: "including a general disregard for environmental and social impacts, and the marginalisation of indigenous peoples and their rights",
          evidenceParagraphId: "D",
          keywords: ["negative effects", "ignored", "disregard", "indigenous peoples"]
        },
        {
          id: 20,
          type: "matching",
          text: "There are more worthwhile things to extract from the sea than minerals.",
          answer: "A",
          explanation: "Professor Mat Upton (A) views the ocean as a 'prospecting ground for new medicines' and fears this potential will be lost to metal exploitation.",
          evidenceQuote: "fear such potential will be lost in the rush to exploit the deep sea's equally rich metal and mineral resources",
          evidenceParagraphId: "A",
          keywords: ["worthwhile things", "extract", "medicines", "minerals"]
        },
        {
          id: 21,
          type: "matching",
          text: "No other form of human exploration will have such a destructive impact on marine life as deep-sea mining.",
          answer: "E",
          explanation: "Verena Tunnicliffe (E) states: 'Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans'.",
          evidenceQuote: "Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans",
          evidenceParagraphId: "F",
          keywords: ["destructive impact", "greatest assault", "marine life"]
        },
        {
          id: 22,
          type: "matching",
          text: "More is known about outer space than about what lies beneath the oceans.",
          answer: "B",
          explanation: "Julie Hunter et al. (B) note: 'The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail...'",
          evidenceQuote: "The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail, leading marine scientists to commonly remark that, with respect to the deep sea, \"We don't yet know what we need to know\"",
          evidenceParagraphId: "D",
          keywords: ["outer space", "Moon, Mars", "known", "mapped"]
        },
        {
          id: 23,
          type: "matching",
          text: "There is one marine life habitat where experts agree mining should not take place.",
          answer: "C",
          explanation: "Dr Jon Copley (C) says explicitly regarding vents: 'we don't want mining on them.'",
          evidenceQuote: "'On deep sea vents, scientists are clear,' says Dr Jon Copley of the National Oceanography Centre, Southampton: 'we don't want mining on them.'",
          evidenceParagraphId: "E",
          keywords: ["habitat", "should not take place", "vents"]
        }
      ]
    },
    {
      id: "g3",
      title: "Questions 24-26 (Summary)",
      instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage.",
      questions: [
        {
          id: 24,
          type: "summary",
          text: "Mining corporations believe... these can be removed without producing much ______.",
          answer: "waste",
          explanation: "Paragraph C: 'deep-sea mining could yield far superior ore to land mining with little, if any, waste.' 'Without producing much' = 'with little, if any'.",
          evidenceQuote: "They say that deep-sea mining could yield far superior ore to land mining with little, if any, waste",
          evidenceParagraphId: "C",
          keywords: ["removed", "producing", "waste"]
        },
        {
          id: 25,
          type: "summary",
          text: "The extraction is often done by adapting the ______ that has already been used to work on land.",
          answer: "machinery",
          explanation: "Paragraph C: 'employing some form of converted machinery previously used in terrestrial mining'. 'Adapted' = 'converted'. 'Used to work on land' = 'used in terrestrial mining'.",
          evidenceQuote: "employing some form of converted machinery previously used in terrestrial mining",
          evidenceParagraphId: "C",
          keywords: ["extraction", "adapting", "machinery", "work on land"]
        },
        {
          id: 26,
          type: "summary",
          text: "Concerned groups strongly believe that ______ is necessary due to the possible number of unidentified consequences.",
          answer: "caution",
          explanation: "Paragraph D: 'environmental and legal groups have urged caution'. 'Strongly believe that... is necessary' = 'urged'.",
          evidenceQuote: "But environmental and legal groups have urged caution, arguing there are potentially massive and unknown ramifications",
          evidenceParagraphId: "D",
          keywords: ["concerned groups", "believe", "necessary", "caution"]
        }
      ]
    }
  ]
};

const EASTER_ISLAND: ExamModule = {
  id: "reading-easter-island",
  title: "Easter Island",
  category: "Reading",
  passage: {
    title: "What destroyed the civilisation of Easter Island?",
    subtitle: "Analysis of the collapse of the Rapanui society",
    paragraphs: [
      {
        id: "A",
        text: "Easter Island, or Rapu Nui as it is known locally, is home to several hundred ancient human statues - the moai. After this remote Pacific island was settled by the Polynesians, it remained isolated for centuries. All the energy and resources that went into the moai - some of which are ten metres tall and weigh over 7,000 kilos - came from the island itself. Yet when Dutch explorers landed in 1722, they met a Stone Age culture. The moai were carved with stone tools, then transported for many kilometres, without the use of animals or wheels, to massive stone platforms. The identity of the moai builders was in doubt until well into the twentieth century. Thor Heyerdahl, the Norwegian ethnographer and adventurer, thought the statues had been created by pre-Inca peoples from Peru. Bestselling Swiss author Erich von Däniken believed they were built by stranded extraterrestrials. Modern science - linguistic, archaeological and genetic evidence - has definitively proved the moai builders were Polynesians, but not how they moved their creations. Local folklore maintains that the statues walked, while researchers have tended to assume the ancestors dragged the statues somehow, using ropes and logs."
      },
      {
        id: "B",
        text: "When the Europeans arrived, Rapa Nui was grassland, with only a few scrawny trees. In the 1970s and 1980s, though, researchers found pollen preserved in lake sediments, which proved the island had been covered in lush palm forests for thousands of years. Only after the Polynesians arrived did those forests disappear. US scientist Jared Diamond believes that the Rapanui people - descendants of Polynesian settlers - wrecked their own environment. They had unfortunately settled on an extremely fragile island - dry, cool, and too remote to be properly fertilised by windblown volcanic ash. When the islanders cleared the forests for firewood and farming, the forests didn't grow back. As trees became scarce and they could no longer construct wooden canoes for fishing, they ate birds. Soil erosion decreased their crop yields. Before Europeans arrived, the Rapanui had descended into civil war and cannibalism, he maintains. The collapse of their isolated civilisation, Diamond writes, is a 'worst-case scenario for what may lie ahead of us in our own future'."
      },
      {
        id: "C",
        text: "The moai, he thinks, accelerated the self-destruction. Diamond interprets them as power displays by rival chieftains who, trapped on a remote little island, lacked other ways of asserting their dominance. They competed by building ever bigger figures. Diamond thinks they laid the moai on wooden sledges, hauled over log rails, but that required both a lot of wood and a lot of people. To feed the people, even more land had to be cleared. When the wood was gone and civil war began, the islanders began toppling the moai. By the nineteenth century none were standing."
      },
      {
        id: "D",
        text: "Archaeologists Terry Hunt of the University of Hawaii and Carl Lipo of California State University agree that Easter Island lost its lush forests and that it was an 'ecological catastrophe' – but they believe the islanders themselves weren't to blame. And the moai certainly weren't. Archaeological excavations indicate that the Rapanui went to heroic efforts to protect the resources of their wind-lashed, infertile fields. They built thousands of circular stone windbreaks and gardened inside them, and used broken volcanic rocks to keep the soil moist. In short, Hunt and Lipo argue, the prehistoric Rapanui were pioneers of sustainable farming."
      },
      {
        id: "E",
        text: "Hunt and Lipo contend that moai-building was an activity that helped keep the peace between islanders. They also believe that moving the moai required few people and no wood, because they were walked upright. On that issue, Hunt and Lipo say, archaeological evidence backs up Rapanui folklore. Recent experiments indicate that as few as 18 people could, with three strong ropes and a bit of practice, easily manoeuvre a 1,000 kg moai replica a few hundred metres. The figures' fat bellies tilted them forward, and a D-shaped base allowed handlers to roll and rock them side to side."
      },
      {
        id: "F",
        text: "Moreover, Hunt and Lipo are convinced that the settlers were not wholly responsible for the loss of the island's trees. Archaeological finds of nuts from the extinct Easter Island palm show tiny grooves, made by the teeth of Polynesian rats. The rats arrived along with the settlers, and in just a few years, Hunt and Lipo calculate, they would have overrun the island. They would have prevented the reseeding of the slow-growing palm trees and thereby doomed Rapa Nui's forest, even without the settlers' campaign of deforestation. No doubt the rats ate birds' eggs too. Hunt and Lipo also see no evidence that Rapanui civilisation collapsed when the palm forest did. They think its population grew rapidly and then remained more or less stable until the arrival of the Europeans, who introduced deadly diseases to which islanders had no immunity. Then in the nineteenth century slave traders decimated the population, which shrivelled to 111 people by 1877."
      },
      {
        id: "G",
        text: "Hunt and Lipo's vision, therefore, is one of an island populated by peaceful and ingenious moai builders and careful stewards of the land, rather than by reckless destroyers ruining their own environment and society. 'Rather than a case of abject failure, Rapu Nui is an unlikely story of success', they claim. Whichever is the case, there are surely some valuable lessons which the world at large can learn from the story of Rapa Nui."
      }
    ]
  },
  questionGroups: [
    {
      id: "g1",
      title: "Questions 14-20 (Headings)",
      instruction: "Choose the correct heading for each paragraph from the list of headings below.",
      questions: [
        {
          id: 14,
          type: "matching",
          text: "Paragraph A: An undisputed answer to a question about the moai",
          answer: "ii",
          explanation: "Paragraph A states: 'Modern science... has definitively proved the moai builders were Polynesians'. Definitively proved = Undisputed answer.",
          evidenceQuote: "Modern science - linguistic, archaeological and genetic evidence - has definitively proved the moai builders were Polynesians, but not how they moved their creations",
          evidenceParagraphId: "A",
          keywords: ["undisputed answer", "definitively proved", "moai builders"]
        },
        {
          id: 15,
          type: "matching",
          text: "Paragraph B: Diminishing food resources",
          answer: "ix",
          explanation: "Paragraph B mentions 'trees became scarce... could no longer construct wooden canoes for fishing... ate birds. Soil erosion decreased their crop yields.' This describes diminishing food.",
          evidenceQuote: "As trees became scarce and they could no longer construct wooden canoes for fishing, they ate birds. Soil erosion decreased their crop yields",
          evidenceParagraphId: "B",
          keywords: ["diminishing food", "canoes for fishing", "crop yields"]
        },
        {
          id: 16,
          type: "matching",
          text: "Paragraph C: How the statues made a situation worse",
          answer: "viii",
          explanation: "Paragraph C opens with 'The moai, he thinks, accelerated the self-destruction.' This means the statues made the situation worse.",
          evidenceQuote: "The moai, he thinks, accelerated the self-destruction",
          evidenceParagraphId: "C",
          keywords: ["statues", "made worse", "accelerated self-destruction"]
        },
        {
          id: 17,
          type: "matching",
          text: "Paragraph D: Evidence of innovative environment management practices",
          answer: "i",
          explanation: "Paragraph D mentions 'heroic efforts to protect the resources', 'stone windbreaks', 'gardened inside them', 'used broken volcanic rocks'. These are innovative practices.",
          evidenceQuote: "Archaeological excavations indicate that the Rapanui went to heroic efforts to protect the resources of their wind-lashed, infertile fields",
          evidenceParagraphId: "D",
          keywords: ["innovative", "management", "protect resources", "stone windbreaks"]
        },
        {
          id: 18,
          type: "matching",
          text: "Paragraph E: A theory which supports a local belief",
          answer: "iv",
          explanation: "Paragraph E mentions 'archaeological evidence backs up Rapanui folklore' regarding how moai were walked.",
          evidenceQuote: "On that issue, Hunt and Lipo say, archaeological evidence backs up Rapanui folklore",
          evidenceParagraphId: "E",
          keywords: ["theory", "supports", "local belief", "folklore"]
        },
        {
          id: 19,
          type: "matching",
          text: "Paragraph F: Destruction outside the inhabitants' control",
          answer: "vii",
          explanation: "Paragraph F discusses 'Polynesian rats' overrunning the island and 'deadly diseases' from Europeans. These were outside inhabitants' control.",
          evidenceQuote: "Moreover, Hunt and Lipo are convinced that the settlers were not wholly responsible for the loss of the island's trees",
          evidenceParagraphId: "F",
          keywords: ["destruction", "outside control", "rats", "diseases"]
        },
        {
          id: 20,
          type: "matching",
          text: "Paragraph G: Two opposing views about the Rapanui people",
          answer: "vi",
          explanation: "Paragraph G contrasts 'peaceful and ingenious moai builders' vs 'reckless destroyers'.",
          evidenceQuote: "Hunt and Lipo's vision, therefore, is one of an island populated by peaceful and ingenious moai builders and careful stewards of the land, rather than by reckless destroyers",
          evidenceParagraphId: "G",
          keywords: ["opposing views", "peaceful", "reckless destroyers"]
        }
      ]
    },
    {
      id: "g2",
      title: "Questions 21-24 (Summary)",
      instruction: "Complete the summary below (Jared Diamond's View). Choose ONE WORD ONLY.",
      questions: [
        {
          id: 21,
          type: "summary",
          text: "Diamond believes... cutting down its trees for fuel and clearing land for ______.",
          answer: "farming",
          explanation: "Paragraph B: 'cleared the forests for firewood and farming'. Fuel = firewood.",
          evidenceQuote: "When the islanders cleared the forests for firewood and farming, the forests didn't grow back",
          evidenceParagraphId: "B",
          keywords: ["clearing land", "farming"]
        },
        {
          id: 22,
          type: "summary",
          text: "When the islanders were no longer able to build the ______ they needed to go fishing...",
          answer: "canoes",
          explanation: "Paragraph B: 'could no longer construct wooden canoes for fishing'.",
          evidenceQuote: "As trees became scarce and they could no longer construct wooden canoes for fishing",
          evidenceParagraphId: "B",
          keywords: ["build", "canoes", "fishing"]
        },
        {
          id: 23,
          type: "summary",
          text: "...they began using the island's ______ as a food source.",
          answer: "birds",
          explanation: "Paragraph B: 'they ate birds'.",
          evidenceQuote: "As trees became scarce and they could no longer construct wooden canoes for fishing, they ate birds",
          evidenceParagraphId: "B",
          keywords: ["food source", "birds"]
        },
        {
          id: 24,
          type: "summary",
          text: "Diamond also claims... methods of transporting the statues needed not only a great number of people, but also a great deal of ______.",
          answer: "wood",
          explanation: "Paragraph C: 'required both a lot of wood and a lot of people'.",
          evidenceQuote: "Diamond thinks they laid the moai on wooden sledges, hauled over log rails, but that required both a lot of wood and a lot of people",
          evidenceParagraphId: "C",
          keywords: ["great deal of", "wood"]
        }
      ]
    }
  ]
};

const TWINS: ExamModule = {
  id: "reading-twins",
  title: "Research using twins",
  category: "Reading",
  passage: {
    title: "Research using twins",
    subtitle: "To biomedical researchers all over the world, twins offer a precious opportunity to untangle the influence of genes and the environment",
    paragraphs: [
      {
        id: "1",
        text: "To biomedical researchers all over the world, twins offer a precious opportunity to untangle the influence of genes and the environment - of nature and nurture. Because identical twins come from a single fertilized egg that splits into two, they share virtually the same genetic code. Any differences between them - one twin having younger looking skin, for example - must be due to environmental factors such as less time spent in the sun."
      },
      {
        id: "2",
        text: "Alternatively, by comparing the experiences of identical twins with those of fraternal twins, who come from separate eggs and share on average half their DNA, researchers can quantify the extent to which our genes affect our lives. If identical twins are more similar to each other with respect to an ailment than fraternal twins are, then vulnerability to the disease must be rooted at least in part in heredity."
      },
      {
        id: "3",
        text: "These two lines of research - studying the differences between identical twins to pinpoint the influence of environment, and comparing identical twins with fraternal ones to measure the role of inheritance - have been crucial to understanding the interplay of nature and nurture in determining our personalities, behavior, and vulnerability to disease. The idea of using twins to measure the influence of heredity dates back to 1875, when the English scientist Francis Galton first suggested the approach (and coined the phrase 'nature and nurture'). But twin studies took a surprising twist in the 1980s, with the arrival of studies into identical twins who had been separated at birth and reunited as adults. Over two decades 137 sets of twins eventually visited Thomas Bouchard's lab in what became known as the Minnesota Study of Twins Reared Apart. Numerous tests were carried out on the twins, and they were each asked more than 15,000 questions."
      },
      {
        id: "4",
        text: "Bouchard and his colleagues used this mountain of data to identify how far twins were affected by their genetic makeup. The key to their approach was a statistical concept called heritability. In broad terms, the heritability of a trait measures the extent to which differences among members of a population can be explained by differences in their genetics. And wherever Bouchard and other scientists looked, it seemed, they found the invisible hand of genetic influence helping to shape our lives."
      },
      {
        id: "5",
        text: "Lately, however, twin studies have helped lead scientists to a radical new conclusion: that nature and nurture are not the only elemental forces at work. According to a recent field called epigenetics, there is a third factor also in play, one that in some cases serves as a bridge between the environment and our genes, and in others operates on its own to shape who we are."
      },
      {
        id: "6",
        text: "Epigenetic processes are chemical reactions tied to neither nature nor nurture but representing what researchers have called a 'third component'. These reactions influence how our genetic code is expressed: how each gene is strengthened or weakened, even turned on or off, to build our bones, brains and all the other parts of our bodies."
      },
      {
        id: "7",
        text: "If you think of our DNA as an immense piano keyboard and our genes as the keys - each key symbolizing a segment of DNA responsible for a particular note, or trait, and all the keys combining to make us who we are - then epigenetic processes determine when and how each key can be struck, changing the tune being played."
      },
      {
        id: "8",
        text: "One way the study of epigenetics is revolutionizing our understanding of biology is by revealing a mechanism by which the environment directly impacts on genes. Studies of animals, for example, have shown that when a rat experiences stress during pregnancy, it can cause epigenetic changes in a fetus that lead to behavioral problems as the rodent grows up. Other epigenetic processes appear to occur randomly, while others are normal, such as those that guide embryonic cells as they become heart, brain, or liver cells, for example."
      }
    ]
  },
  questionGroups: [
    {
      id: "g1",
      title: "Questions 1-4 (True/False/NG)",
      instruction: "Do the following statements agree with the information given in Reading Passage 1?",
      questions: [
        {
          id: 1,
          type: "true_false",
          text: "There may be genetic causes for the differences in how young the skin of identical twins looks.",
          answer: "FALSE",
          explanation: "Paragraph 1 states: 'Because identical twins... share virtually the same genetic code. Any differences between them... must be due to environmental factors'. The statement contradicts the text.",
          evidenceQuote: "Any differences between them - one twin having younger looking skin, for example - must be due to environmental factors",
          evidenceParagraphId: "1",
          keywords: ["genetic causes", "skin", "identical twins"]
        },
        {
          id: 2,
          type: "true_false",
          text: "Twins are at greater risk of developing certain illnesses than non-twins.",
          answer: "NOT GIVEN",
          explanation: "Paragraph 2 mentions 'vulnerability to the disease', but it compares identical twins to fraternal twins. It does not compare twins to non-twins (the general population).",
          evidenceQuote: "If identical twins are more similar to each other with respect to an ailment than fraternal twins are",
          evidenceParagraphId: "2",
          keywords: ["greater risk", "illnesses", "non-twins"]
        },
        {
          id: 3,
          type: "true_false",
          text: "Bouchard advertised in newspapers for twins who had been separated at birth.",
          answer: "NOT GIVEN",
          explanation: "Paragraph 3 mentions '137 sets of twins eventually visited Thomas Bouchard's lab', but it does not say how they were recruited (advertisements vs other means).",
          evidenceQuote: "Over two decades 137 sets of twins eventually visited Thomas Bouchard's lab in what became known as the Minnesota Study of Twins Reared Apart",
          evidenceParagraphId: "3",
          keywords: ["advertised", "newspapers", "Bouchard"]
        },
        {
          id: 4,
          type: "true_false",
          text: "Epigenetic processes are different from both genetic and environmental processes.",
          answer: "TRUE",
          explanation: "Paragraph 6 states: 'Epigenetic processes are chemical reactions tied to neither nature nor nurture but representing what researchers have called a third component'.",
          evidenceQuote: "Epigenetic processes are chemical reactions tied to neither nature nor nurture but representing what researchers have called a 'third component'",
          evidenceParagraphId: "6",
          keywords: ["Epigenetic", "different", "genetic", "environmental"]
        }
      ]
    }
  ]
};

export const INITIAL_EXAMS: ExamModule[] = [DEEP_SEA_MINING, EASTER_ISLAND, TWINS];