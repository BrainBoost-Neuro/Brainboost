const QUIZZES = [
  {
    id: "sleep",
    title: "How Much Do You Actually Know About Sleep?",
    category: "Sleep & Memory",
    description: "A 10-question test on teen sleep, circadian rhythm, memory, and recovery.",
    difficulty: "Beginner",
    questions: [
      { q: "Most teenagers generally need about how much sleep per night?", options: ["5–6 hours", "6–7 hours", "8–10 hours", "11–13 hours"], answer: 2, explanation: "Most teens need about 8–10 hours for recovery, learning, mood, and attention." },
      { q: "Which hormone helps signal darkness and regulate sleep timing?", options: ["Insulin", "Melatonin", "Adrenaline", "Cortisol"], answer: 1, explanation: "Melatonin rises with darkness and helps the body prepare for sleep." },
      { q: "What is the circadian rhythm?", options: ["A 24-hour internal biological clock", "A memory disease", "A sleep position", "A type of dream"], answer: 0, explanation: "The circadian rhythm is the body's internal timing system, roughly following a 24-hour cycle." },
      { q: "Which habit is most likely to harm sleep quality?", options: ["Morning sunlight", "Consistent bedtime", "Late caffeine", "Cool room"], answer: 2, explanation: "Caffeine can stay active for hours and make sleep lighter or delayed." },
      { q: "Sleep is especially important for memory because it supports:", options: ["Memory consolidation", "Bone length overnight", "Permanent focus", "Avoiding all stress"], answer: 0, explanation: "During sleep, the brain helps stabilize and organize memories." },
      { q: "REM sleep is commonly associated with:", options: ["Dreaming and emotional processing", "Stopping all brain activity", "Digesting only protein", "Increasing blood type"], answer: 0, explanation: "REM sleep is linked to dreaming, emotional processing, and aspects of memory." },
      { q: "Bright light from screens late at night can:", options: ["Delay sleep timing", "Guarantee deeper sleep", "Remove the need for rest", "Make melatonin unnecessary"], answer: 0, explanation: "Light exposure at night can delay circadian timing and make falling asleep harder." },
      { q: "What is sleep debt?", options: ["Accumulated sleep loss over time", "A dream you remember", "Sleeping too early once", "A medical bill"], answer: 0, explanation: "Sleep debt builds when you consistently sleep less than your body needs." },
      { q: "Which brain structure is important for forming certain memories?", options: ["Hippocampus", "Liver", "Femur", "Retina only"], answer: 0, explanation: "The hippocampus is strongly involved in forming and organizing many memories." },
      { q: "Chronic sleep deprivation can most directly weaken:", options: ["Attention and learning", "Eye color", "Height in one night", "Blood type"], answer: 0, explanation: "Poor sleep can impair focus, learning, mood regulation, and reaction time." }
    ]
  },
  {
    id: "dopamine",
    title: "Dopamine: Motivation or Myth?",
    category: "Brain Chemicals",
    description: "A 10-question test on dopamine, reward prediction, motivation, and myths.",
    difficulty: "Beginner",
    questions: [
      { q: "Dopamine is most accurately involved in:", options: ["Reward prediction and motivation", "Only happiness", "Only sleep", "Only digestion"], answer: 0, explanation: "Dopamine is involved in motivation, reward prediction, movement, and learning from outcomes." },
      { q: "A common dopamine myth is that dopamine simply means:", options: ["Pleasure", "Movement", "Learning", "Attention"], answer: 0, explanation: "Dopamine is not just pleasure. It is also involved in wanting, prediction, and learning." },
      { q: "Which activity can affect reward circuits?", options: ["Social media scrolling", "Exercise", "Studying", "All of the above"], answer: 3, explanation: "Many behaviors can influence reward and motivation systems." },
      { q: "Dopamine is also important for:", options: ["Movement control", "Hair color", "Blood type", "Bone shape"], answer: 0, explanation: "Dopamine pathways help control movement. This is relevant in disorders like Parkinson's disease." },
      { q: "Reward prediction means the brain is estimating:", options: ["What outcome may happen", "Your exact future height", "Your blood pressure forever", "Your eye color"], answer: 0, explanation: "Reward prediction is about the brain learning what outcomes to expect." },
      { q: "Which brain area is strongly linked with reward processing?", options: ["Nucleus accumbens", "Appendix", "Kidney", "Elbow joint"], answer: 0, explanation: "The nucleus accumbens is part of reward-related brain circuitry." },
      { q: "A healthier approach to stimulation is:", options: ["Balanced habits", "Constant scrolling", "Never resting", "Avoiding all enjoyment"], answer: 0, explanation: "Balanced sleep, exercise, work, and recreation are more realistic than extreme dopamine advice." },
      { q: "Dopamine spikes are not automatically bad because:", options: ["Dopamine is part of normal learning and motivation", "Dopamine is fake", "The brain does not use chemicals", "Only adults have dopamine"], answer: 0, explanation: "Dopamine is normal and necessary. The issue is unhealthy patterns, not dopamine itself." },
      { q: "Which is most likely to train reward habits poorly?", options: ["Constant short-form stimulation with no limits", "A consistent sleep routine", "Exercise", "Focused study blocks"], answer: 0, explanation: "Constant high-stimulation habits can make focused work feel harder by comparison." },
      { q: "The strongest summary is:", options: ["Dopamine is a motivation and learning signal, not just a happiness chemical", "Dopamine is only bad", "Dopamine only exists in phones", "Dopamine replaces sleep"], answer: 0, explanation: "That is the cleanest beginner-level summary." }
    ]
  },
  {
    id: "memory",
    title: "Can You Beat the Memory Quiz?",
    category: "Learning & Memory",
    description: "A 10-question test on recall, spaced repetition, forgetting, and studying.",
    difficulty: "Beginner",
    questions: [
      { q: "Which study method is usually stronger for long-term memory?", options: ["Active recall", "Rereading only", "Highlighting everything", "Studying once"], answer: 0, explanation: "Active recall strengthens memory by forcing retrieval." },
      { q: "Spaced repetition means:", options: ["Reviewing across multiple sessions", "Cramming once", "Never reviewing", "Only watching videos"], answer: 0, explanation: "Spacing reviews over time helps reduce forgetting." },
      { q: "The hippocampus is strongly linked to:", options: ["Memory formation", "Finger movement only", "Digestion only", "Blood filtering"], answer: 0, explanation: "The hippocampus plays a key role in forming certain types of memory." },
      { q: "Working memory is best described as:", options: ["Holding and using information briefly", "Remembering your whole life perfectly", "Only muscle memory", "A type of sleep"], answer: 0, explanation: "Working memory lets you hold and manipulate information for a short time." },
      { q: "Forgetting is:", options: ["A normal part of memory", "Always permanent", "Only caused by low intelligence", "Impossible to reduce"], answer: 0, explanation: "Forgetting is normal. Better study systems reduce it." },
      { q: "Practice testing helps because it trains:", options: ["Retrieval", "Eye color", "Bone density", "Blood type"], answer: 0, explanation: "Testing yourself strengthens retrieval pathways and exposes weak areas." },
      { q: "Which is the weakest strategy by itself?", options: ["Passive rereading", "Active recall", "Spaced repetition", "Practice questions"], answer: 0, explanation: "Passive rereading feels easy but often gives shallow memory." },
      { q: "Interleaving means:", options: ["Mixing related problem types during practice", "Studying one easy topic forever", "Avoiding hard questions", "Only reading summaries"], answer: 0, explanation: "Interleaving improves flexible understanding by mixing related skills." },
      { q: "Long-term memory improves most when studying is:", options: ["Repeated, active, and spaced", "One giant late-night session", "Only highlighted", "Never tested"], answer: 0, explanation: "Repeated active retrieval over time is much stronger than cramming." },
      { q: "A good study session should include:", options: ["Recall attempts and correction", "Only copying notes", "Only listening passively", "Avoiding mistakes"], answer: 0, explanation: "Mistakes plus correction are useful because they show what needs work." }
    ]
  },
  {
    id: "stress",
    title: "Stress: Helpful Signal or Mental Noise?",
    category: "Stress & Focus",
    description: "A 10-question test on cortisol, stress response, focus, and recovery.",
    difficulty: "Beginner",
    questions: [
      { q: "Stress is best described as:", options: ["A body and brain response to demand", "Always useless", "Only sadness", "Only muscle pain"], answer: 0, explanation: "Stress is a response to challenge or demand. It can be useful or harmful depending on intensity and duration." },
      { q: "Cortisol is commonly known as a:", options: ["Stress-related hormone", "Sleep-only hormone", "Bone mineral", "Vitamin"], answer: 0, explanation: "Cortisol is involved in the body's stress response and daily energy rhythm." },
      { q: "Short-term stress can sometimes:", options: ["Increase alertness", "Destroy learning instantly", "Stop breathing", "Remove all emotions"], answer: 0, explanation: "Acute stress can increase alertness, but too much stress can impair performance." },
      { q: "Chronic high stress can weaken:", options: ["Sleep and attention", "Eye color", "Blood type", "Shoe size"], answer: 0, explanation: "Long-term stress can affect sleep, focus, mood, and health." },
      { q: "Which habit helps stress recovery?", options: ["Sleep", "Constant doomscrolling", "Late caffeine every night", "Skipping all rest"], answer: 0, explanation: "Sleep is one of the strongest recovery tools." },
      { q: "Breathing exercises may help because they can:", options: ["Signal safety to the nervous system", "Erase exams", "Replace studying", "Change your DNA instantly"], answer: 0, explanation: "Slow breathing can help shift the body toward a calmer state." },
      { q: "Stress before an exam is not always bad because:", options: ["Some arousal can improve focus", "Stress means you will fail", "Stress is fake", "Only adults experience stress"], answer: 0, explanation: "Moderate arousal can support focus. Extreme stress is where performance drops." },
      { q: "Which is the worst response to stress?", options: ["Avoid everything forever", "Break tasks into smaller parts", "Sleep enough", "Prepare earlier"], answer: 0, explanation: "Total avoidance usually makes stress grow." },
      { q: "The nervous system branch linked with rest and recovery is:", options: ["Parasympathetic", "Skeletal", "Digestive-only", "Visual"], answer: 0, explanation: "The parasympathetic system supports rest, digestion, and recovery." },
      { q: "A practical stress plan includes:", options: ["Sleep, planning, movement, and breaks", "No sleep and panic", "Only caffeine", "Ignoring every deadline"], answer: 0, explanation: "Basic recovery and planning beat dramatic motivation speeches." }
    ]
  },
  {
    id: "learning",
    title: "Are You Studying Like a High Performer?",
    category: "Learning Science",
    description: "A 10-question test on evidence-based learning strategies.",
    difficulty: "Beginner",
    questions: [
      { q: "The strongest learning usually comes from:", options: ["Active practice", "Passive scrolling", "Reading once", "Copying without thinking"], answer: 0, explanation: "Active practice makes your brain retrieve and use information." },
      { q: "A good way to know if you understand something is to:", options: ["Explain it without looking", "Highlight it", "Stare at it", "Assume you know it"], answer: 0, explanation: "Explaining without notes reveals gaps fast." },
      { q: "The illusion of competence happens when:", options: ["Something feels familiar but you cannot recall it", "You master everything", "You sleep well", "You practice actively"], answer: 0, explanation: "Familiarity is not the same as being able to retrieve information." },
      { q: "Which is better before a test?", options: ["Practice questions", "Only rereading", "Only decorating notes", "Avoiding hard topics"], answer: 0, explanation: "Practice questions train retrieval and application." },
      { q: "Feedback is useful because it:", options: ["Corrects errors", "Makes studying unnecessary", "Guarantees full marks", "Stops forgetting forever"], answer: 0, explanation: "Feedback tells you what to fix." },
      { q: "Deep understanding improves when you:", options: ["Connect ideas together", "Memorize isolated words only", "Avoid examples", "Never ask why"], answer: 0, explanation: "Connections make knowledge more flexible and useful." },
      { q: "Cramming is weak because:", options: ["It often fades quickly", "It never works short-term", "It improves sleep", "It replaces practice"], answer: 0, explanation: "Cramming may help short-term recall but usually fades fast." },
      { q: "A strong study block should include:", options: ["Focused work and a clear target", "Random multitasking", "Phone checking every minute", "No goal"], answer: 0, explanation: "Clear targets and focus make study blocks productive." },
      { q: "Which is best after getting a question wrong?", options: ["Find the mistake and redo it", "Ignore it", "Quit the subject", "Only blame the teacher"], answer: 0, explanation: "Corrections turn mistakes into learning." },
      { q: "High-performing students usually rely on:", options: ["Systems and consistency", "Mood only", "Luck only", "Pretty notes only"], answer: 0, explanation: "Systems beat random motivation." }
    ]
  }
];