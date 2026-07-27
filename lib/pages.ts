import type { PageContent } from "@/components/LandingPage";

export const home: PageContent = {
  eyebrow: "Free · fast · private",
  title: "Spin the Wheel – Random Picker",
  intro: "Turn a list of choices into one clear answer. Add your options, press spin, and let the wheel make a fair random pick.",
  storageKey: "main",
  path: "/",
  initialEntries: ["Pizza", "Tacos", "Sushi", "Pasta", "Burgers", "Salad"],
  sections: [
    { heading: "Decisions without the debate", body: "Use the wheel whenever several options are equally good: choose tonight’s dinner, set the order for a game, assign a small task, or pick the next activity. Seeing the options move makes the decision feel transparent and turns an ordinary choice into a small shared moment. Add one option per line, remove anything that is no longer relevant, then spin." },
    { heading: "Fair, private, and ready anywhere", body: "Each valid entry occupies an equal slice, and the winning slice is selected randomly before the animation completes. Your lists stay in this browser’s local storage; nothing is uploaded. The page is designed for phones and works offline after the first visit, so it is useful in classrooms, meetings, parties, and on the move." },
  ],
  faq: [
    { q: "Is every entry equally likely to win?", a: "Yes. Every line is treated as one entry and receives the same chance. Repeating an entry gives it additional chances." },
    { q: "Can I save a wheel for later?", a: "Your current list is saved automatically on this device. Return in the same browser to continue using it." },
    { q: "What happens when I remove the winner?", a: "Enable the checkbox before spinning. After you close the result, the winning entry is removed for the next round." },
  ],
};

export const names: PageContent = {
  eyebrow: "A fair classroom helper",
  title: "Random Name Picker for Classrooms",
  intro: "Choose a student without bias or awkward pauses. Paste your class list, spin once, and keep everyone engaged.",
  storageKey: "names",
  path: "/random-name-picker",
  initialEntries: ["Ava", "Noah", "Mia", "Lucas", "Sofia", "Ethan", "Amara", "Leo"],
  sections: [
    { heading: "Make participation feel fair", body: "A visible name wheel gives every student the same chance to be called on. It works well for warm-up questions, reading turns, classroom jobs, presentations, and quick checks for understanding. Paste one name per line before the lesson and the list stays available on that device. Students can see the process, which helps a random choice feel clear rather than personal." },
    { heading: "Flexible for every activity", body: "Turn on “remove winner” when each student should be selected once before anyone repeats. Leave it off for independent random draws. You can also use groups, table numbers, topics, or vocabulary prompts instead of names. Because everything happens in the browser, class lists are not sent to an account or server. The clean, large controls are easy to use on a classroom display, tablet, or phone." },
  ],
  faq: [
    { q: "Are student names uploaded?", a: "No. Names stay in local browser storage on the device you use." },
    { q: "Can I prevent the same student being picked twice?", a: "Yes. Select “Remove winner after the spin” before starting the round." },
    { q: "Can I use nicknames or group names?", a: "Absolutely. Each non-empty line can contain any short label you want to pick." },
  ],
};

export const teams: PageContent = {
  eyebrow: "Balanced groups in seconds",
  title: "Random Team Generator",
  intro: "Paste a list, choose how many teams you need, and create randomized groups in one tap.",
  storageKey: "teams",
  path: "/random-team-generator",
  mode: "teams",
  initialEntries: ["Alex", "Blake", "Casey", "Devon", "Emery", "Frankie", "Gray", "Harper"],
  sections: [
    { heading: "From one list to ready-made teams", body: "Random groups save time and avoid the social friction of asking people to choose sides. Add participants one per line, set the number of teams, and generate. The list is shuffled using the browser’s random number generator, then distributed across teams in turn. That keeps team sizes as even as possible when the total does not divide perfectly." },
    { heading: "Useful at school, work, and play", body: "Create project groups, workshop breakouts, sports sides, game-night teams, or rotating practice partners. Generate again whenever you want a fresh mix. The tool does not judge skill levels, roles, or preferences, so review the result if your activity needs a specific balance. Your participant list is kept only in local storage and remains available when you return on the same device." },
  ],
  faq: [
    { q: "Will every team have the same size?", a: "Teams are as even as mathematically possible. When numbers do not divide evenly, some teams have one extra person." },
    { q: "How many teams can I create?", a: "You can create between 2 and 20 teams, up to the number of entries in your list." },
    { q: "Can I reshuffle the same list?", a: "Yes. Select Generate teams again to create a new random arrangement without re-entering names." },
  ],
};

export const yesNo: PageContent = {
  eyebrow: "Two choices. One satisfying spin.",
  title: "Yes or No Wheel",
  intro: "When you are truly undecided, let a simple 50/50 wheel give you an immediate yes or no.",
  storageKey: "yes-no",
  path: "/yes-no-wheel",
  initialEntries: ["Yes", "No"],
  sections: [
    { heading: "A quick nudge for low-stakes choices", body: "The yes or no wheel is made for those moments when either answer is acceptable and you simply need momentum. Should you try the new recipe, take the scenic route, watch one more episode, or volunteer first? Press the button and use the result as your answer—or notice how you feel while the wheel is spinning. That reaction can be useful information too." },
    { heading: "Simple by design", body: "Yes and No each appear once, giving both outcomes an equal chance. You can rename them when your decision has two different options, such as walk or cycle, tea or coffee, or now or later. Changes are saved in this browser. For important decisions involving health, money, safety, or other people, use good judgment and reliable advice rather than a random tool." },
  ],
  faq: [
    { q: "Is the wheel exactly 50/50?", a: "Yes, while the list contains one Yes and one No. Each of the two entries has the same probability." },
    { q: "Can I replace Yes and No with two choices?", a: "Yes. Edit the two lines and the wheel updates immediately." },
    { q: "Should I use this for important decisions?", a: "No. It is intended for harmless, low-stakes choices where either outcome is acceptable." },
  ],
};

export const raffle: PageContent = {
  eyebrow: "A clear, celebratory draw",
  title: "Raffle Picker",
  intro: "Run a quick giveaway draw with a wheel everyone can follow. Paste entrants, spin, and celebrate the winner.",
  storageKey: "raffle",
  path: "/raffle-picker",
  initialEntries: ["Ticket 104", "Ticket 217", "Ticket 308", "Ticket 412", "Ticket 529", "Ticket 631"],
  sections: [
    { heading: "Make the draw part of the fun", body: "A spinning raffle wheel creates a visible moment of anticipation for small giveaways, office events, community fundraisers, and party prizes. Add a name or ticket number on each line, check the list, and spin. The selected entry is announced in a full-screen result with confetti, making it easy to share on a display or during a video call." },
    { heading: "Run multiple prize rounds", body: "Enable “remove winner” before a draw when one entrant should not win twice. Close the winning result and that entry disappears automatically before the next spin. The wheel treats every line equally, so duplicate lines create extra chances. Always review your list and follow the published rules of your promotion. Entries stay on the device and are not submitted to a database." },
  ],
  faq: [
    { q: "Can one person have multiple entries?", a: "Yes. Add their name or ticket on multiple lines if your raffle rules give them multiple chances." },
    { q: "How do I pick several winners?", a: "Turn on “Remove winner after the spin,” then repeat the spin for each prize." },
    { q: "Does this certify a regulated prize draw?", a: "No. This is a simple randomization tool. You are responsible for eligibility, records, and compliance with local promotion rules." },
  ],
};
