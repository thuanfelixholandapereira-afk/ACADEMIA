const EQUIPMENT = [
  "Leg press", "Hack", "Barra guiada", "Cadeira extensora", "Cadeira flexora", "Cadeira abdutora",
  "Cadeira adutora", "Panturrilha sentada", "Glute trainer", "Supino reto", "Supino inclinado",
  "Supino declinado", "Peck deck", "Barra fixa", "Cross over / polias", "Puxador / remada",
  "Desenvolvimento ombros", "Power hack", "Bicicleta ergométrica", "Esteira", "Simulador de escada",
  "Tapete / solo", "Bancos inclináveis", "Halteres", "Barra W"
];
const likesBase = ["Supino", "Agachamento", "Halteres", "Polia", "Leg press", "Rosca bíceps"];
const dislikesBase = ["Burpee", "Afundo", "Corrida", "Levantamentos pesados", "Flexão", "Abdominais longos"];
const prioritiesBase = ["Peito", "Costas", "Ombros", "Braços", "Glúteos", "Quadríceps", "Posterior", "Panturrilha", "Abdômen"];

const EXERCISES = [
  { id: "supino-halteres", name: "Supino reto com halteres", category: "push", muscles: ["Peito", "Tríceps", "Ombros anteriores"], primary: "Peito", equipment: ["Halteres", "Bancos inclináveis"], level: ["iniciante", "intermediário", "avançado"], tags: ["hipertrofia", "força", "estético"], jointFriendly: true, time: "Médio", visual: "Banco reto • escápulas firmes • desça com controle e suba fechando o peito.", errors: "Cotovelo muito aberto, perder escápula, bater halter no topo.", tip: "Pense em aproximar os braços pelo peitoral, não apenas empurrar peso." },
  { id: "supino-guiada", name: "Supino na barra guiada", category: "push", muscles: ["Peito", "Tríceps"], primary: "Peito", equipment: ["Barra guiada", "Bancos inclináveis"], level: ["iniciante", "intermediário", "avançado"], tags: ["hipertrofia", "segurança"], jointFriendly: true, time: "Médio", visual: "Trajetória fixa • pés firmes • descer até amplitude confortável.", errors: "Descolar glúteos do banco, descer torto, amplitude curta demais.", tip: "Boa escolha para treinar pesado com mais estabilidade." },
  { id: "crossover", name: "Crucifixo no cross over", category: "push", muscles: ["Peito", "Ombros anteriores"], primary: "Peito", equipment: ["Cross over / polias"], level: ["iniciante", "intermediário", "avançado"], tags: ["estético", "hipertrofia"], jointFriendly: true, time: "Curto", visual: "Passo à frente • tronco estável • abra até alongar e feche sem girar ombros.", errors: "Balançar corpo, transformar em supino, encolher ombros.", tip: "Excelente para sentir o peitoral e refinar execução." },
  { id: "remada-apoiada", name: "Remada com peito apoiado", category: "pull", muscles: ["Costas", "Dorsais", "Bíceps"], primary: "Costas", equipment: ["Halteres", "Bancos inclináveis"], level: ["iniciante", "intermediário", "avançado"], tags: ["hipertrofia", "lombar-friendly"], jointFriendly: true, time: "Médio", visual: "Peito apoiado no banco • puxe cotovelos para trás e para baixo.", errors: "Subir ombros, puxar com impulso, amplitude curta.", tip: "Ótima quando você quer costas fortes sem sobrecarregar lombar." },
  { id: "puxador-frente", name: "Puxador frente pegada média", category: "pull", muscles: ["Dorsais", "Costas", "Bíceps"], primary: "Costas", equipment: ["Puxador / remada"], level: ["iniciante", "intermediário", "avançado"], tags: ["largura", "hipertrofia"], jointFriendly: true, time: "Curto", visual: "Peito alto • traga a barra para cima do peito sem jogar o tronco.", errors: "Puxar atrás da nuca, exagerar na inclinação, perder controle na subida.", tip: "Pense em descer os cotovelos em vez de só puxar a barra." },
  { id: "barra-fixa-assistida", name: "Barra fixa assistida / regressão técnica", category: "pull", muscles: ["Dorsais", "Costas", "Bíceps", "Core"], primary: "Costas", equipment: ["Barra fixa", "Tapete / solo"], level: ["intermediário", "avançado"], tags: ["força", "controle"], jointFriendly: false, time: "Médio", visual: "Corpo firme • peito na direção da barra • escápulas ativas.", errors: "Encolher ombros, chutar, perder alinhamento do tronco.", tip: "Use elástico ou controle excêntrico se ainda não fizer livre." },
  { id: "agacho-guiada-box", name: "Agachamento na barra guiada para caixa", category: "legs", muscles: ["Quadríceps", "Glúteos"], primary: "Quadríceps", equipment: ["Barra guiada", "Banquinhos altos"], level: ["iniciante", "intermediário"], tags: ["segurança", "técnica"], jointFriendly: true, time: "Médio", visual: "Sente controlando no box e suba empurrando o chão.", errors: "Cair no banco, joelho colapsar, descer sem tensão.", tip: "Excelente para aprender padrão de agachar com confiança." },
  { id: "leg-press", name: "Leg press 45°", category: "legs", muscles: ["Quadríceps", "Glúteos"], primary: "Quadríceps", equipment: ["Leg press"], level: ["iniciante", "intermediário", "avançado"], tags: ["hipertrofia", "segurança", "força"], jointFriendly: true, time: "Médio", visual: "Pés estáveis • desça até amplitude sem tirar lombar do banco.", errors: "Descolar quadril, fechar joelhos, amplitude descontrolada.", tip: "Ótimo para gerar tensão em perna com menos exigência técnica que agacho livre." },
  { id: "hack-machine", name: "Hack machine", category: "legs", muscles: ["Quadríceps", "Glúteos"], primary: "Quadríceps", equipment: ["Hack"], level: ["intermediário", "avançado"], tags: ["hipertrofia", "densidade"], jointFriendly: false, time: "Médio", visual: "Tronco encaixado • desça com joelhos alinhados ao pé.", errors: "Amplitude curta demais, joelho colapsando, rebote no fundo.", tip: "Excelente para quadríceps quando você quer intensidade real." },
  { id: "stiff-halteres", name: "Stiff com halteres", category: "posterior", muscles: ["Posterior de coxa", "Glúteos", "Lombar estabilizadora"], primary: "Posterior", equipment: ["Halteres"], level: ["intermediário", "avançado"], tags: ["posterior", "hipertrofia"], jointFriendly: false, time: "Médio", visual: "Quadril para trás • coluna neutra • desça sentindo alongar posterior.", errors: "Arredondar coluna, transformar em agachamento, perder tensão.", tip: "Se tiver lombar sensível, reduza carga e foque padrão de movimento." },
  { id: "mesa-flexora", name: "Cadeira / mesa flexora", category: "posterior", muscles: ["Posterior de coxa"], primary: "Posterior", equipment: ["Cadeira flexora"], level: ["iniciante", "intermediário", "avançado"], tags: ["segurança", "hipertrofia"], jointFriendly: true, time: "Curto", visual: "Quadril fixo • feche controlando a fase excêntrica.", errors: "Tirar quadril do apoio, soltar na volta, acelerar demais.", tip: "Ótima opção para posterior sem exigir técnica complexa." },
  { id: "glute-trainer", name: "Glute trainer / hip thrust guiado", category: "glutes", muscles: ["Glúteos", "Posterior"], primary: "Glúteos", equipment: ["Glute trainer"], level: ["iniciante", "intermediário", "avançado"], tags: ["glúteos", "estético"], jointFriendly: true, time: "Curto", visual: "Queixo levemente recolhido • suba comprimindo glúteos no topo.", errors: "Hiperextender lombar, perder controle na descida.", tip: "Top para foco estético em glúteos com alta ativação." },
  { id: "abdutora", name: "Cadeira abdutora com pausa", category: "glutes", muscles: ["Glúteo médio", "Glúteos"], primary: "Glúteos", equipment: ["Cadeira abdutora"], level: ["iniciante", "intermediário", "avançado"], tags: ["glúteos", "estético", "controle"], jointFriendly: true, time: "Curto", visual: "Abra segurando 1–2 segundos no pico da contração.", errors: "Bater as placas, amplitude preguiçosa, soltar rápido.", tip: "Boa para terminar treino de glúteos com alto controle." },
  { id: "desenvolvimento-halteres", name: "Desenvolvimento com halteres", category: "shoulders", muscles: ["Ombros", "Tríceps"], primary: "Ombros", equipment: ["Halteres", "Bancos inclináveis"], level: ["iniciante", "intermediário", "avançado"], tags: ["hipertrofia", "estético"], jointFriendly: true, time: "Médio", visual: "Punhos firmes • suba em arco natural sem colidir halteres.", errors: "Lombar excessiva, descer demais sem controle, cotovelo torto.", tip: "Excelente para ombros cheios com liberdade articular." },
  { id: "elevacao-lateral", name: "Elevação lateral guiada por tensão", category: "shoulders", muscles: ["Deltoide lateral"], primary: "Ombros", equipment: ["Halteres", "Cross over / polias"], level: ["iniciante", "intermediário", "avançado"], tags: ["estético", "ombros"], jointFriendly: true, time: "Curto", visual: "Braço sobe pela lateral até linha do ombro com cotovelo suave.", errors: "Encolher trapézio, jogar corpo, subir alto demais.", tip: "Menos ego, mais controle. Ombro responde muito bem a execução fina." },
  { id: "rosca-w", name: "Rosca bíceps com barra W", category: "arms", muscles: ["Bíceps", "Braquial"], primary: "Braços", equipment: ["Barra W"], level: ["iniciante", "intermediário", "avançado"], tags: ["braços", "hipertrofia"], jointFriendly: true, time: "Curto", visual: "Cotovelos estáveis ao lado do corpo • suba sem balançar tronco.", errors: "Roubar com lombar, cotovelos andando à frente, amplitude incompleta.", tip: "Ótima para volume de bíceps com conforto de punho." },
  { id: "triceps-corda", name: "Tríceps corda na polia", category: "arms", muscles: ["Tríceps"], primary: "Braços", equipment: ["Cross over / polias"], level: ["iniciante", "intermediário", "avançado"], tags: ["braços", "controle"], jointFriendly: true, time: "Curto", visual: "Cotovelo fixo • abra a corda no final para contrair mais.", errors: "Empurrar com ombro, inclinar corpo, amplitude curta.", tip: "Ótimo para tríceps sem grande estresse articular." },
  { id: "panturrilha-sentada", name: "Panturrilha sentada com pausa", category: "calves", muscles: ["Panturrilhas"], primary: "Panturrilha", equipment: ["Panturrilha sentada"], level: ["iniciante", "intermediário", "avançado"], tags: ["acabamento", "controle"], jointFriendly: true, time: "Curto", visual: "Desça completo, suba o máximo e segure no topo.", errors: "Fazer curto, quicar, perder tempo sob tensão.", tip: "Panturrilha precisa de amplitude real e disciplina." },
  { id: "bike-intervalada", name: "Bike intervalada", category: "cardio", muscles: ["Cardio", "Pernas"], primary: "Condicionamento", equipment: ["Bicicleta ergométrica"], level: ["iniciante", "intermediário", "avançado"], tags: ["emagrecimento", "baixo impacto"], jointFriendly: true, time: "Curto", visual: "Picos curtos fortes alternados com recuperação leve.", errors: "Começar intenso demais, perder cadência, postura relaxada demais.", tip: "Excelente para quem quer gastar energia com menos impacto." },
  { id: "esteira-inclinada", name: "Caminhada inclinada na esteira", category: "cardio", muscles: ["Cardio", "Glúteos", "Pernas"], primary: "Condicionamento", equipment: ["Esteira"], level: ["iniciante", "intermediário", "avançado"], tags: ["emagrecimento", "baixo impacto"], jointFriendly: true, time: "Médio", visual: "Passo firme, inclinação moderada e tronco estável.", errors: "Segurar demais na esteira, inclinar o corpo para frente.", tip: "Muito boa para gasto calórico sem virar corrida exaustiva." },
  { id: "escada-moderada", name: "Simulador de escada em ritmo moderado", category: "cardio", muscles: ["Cardio", "Glúteos", "Pernas"], primary: "Condicionamento", equipment: ["Simulador de escada"], level: ["intermediário", "avançado"], tags: ["emagrecimento", "glúteos"], jointFriendly: false, time: "Médio", visual: "Suba com passada controlada sem despencar no degrau.", errors: "Apoiar peso no corrimão, ritmo caótico, passos curtos demais.", tip: "Boa para glúteos e condicionamento se você já tolera o esforço." },
  { id: "prancha", name: "Prancha com foco em alinhamento", category: "core", muscles: ["Abdômen", "Core"], primary: "Abdômen", equipment: ["Tapete / solo"], level: ["iniciante", "intermediário", "avançado"], tags: ["core", "estabilidade"], jointFriendly: true, time: "Curto", visual: "Linha reta ombro-quadril-tornozelo, abdômen firme.", errors: "Quadril cair, elevar demais, prender respiração.", tip: "Pense em aproximar costelas do quadril sem arredondar tudo." },
];

const splitTemplates = {
  3: [
    { id: "a", name: "Full Body A", focus: "Base global com ênfase em padrões seguros e eficientes" },
    { id: "b", name: "Full Body B", focus: "Distribuição equilibrada com foco técnico" },
    { id: "c", name: "Full Body C", focus: "Estímulo complementar e fechamento da semana" },
  ],
  4: [
    { id: "a", name: "Upper 1", focus: "Peito, costas e braços com eficiência" },
    { id: "b", name: "Lower 1", focus: "Quadríceps, glúteos e posterior" },
    { id: "c", name: "Upper 2", focus: "Costas, ombros e acabamento estético" },
    { id: "d", name: "Lower 2", focus: "Glúteos, posterior e densidade de pernas" },
  ],
  5: [
    { id: "a", name: "Push", focus: "Peito, ombros e tríceps" },
    { id: "b", name: "Lower Quad", focus: "Quadríceps e glúteos" },
    { id: "c", name: "Pull", focus: "Costas, dorsais e bíceps" },
    { id: "d", name: "Lower Posterior", focus: "Posterior, glúteos e panturrilhas" },
    { id: "e", name: "Shape", focus: "Braços, ombros, core e pontos estéticos prioritários" },
  ],
  6: [
    { id: "a", name: "Push Heavy", focus: "Força + hipertrofia de empurrar" },
    { id: "b", name: "Pull Heavy", focus: "Largura e densidade de costas" },
    { id: "c", name: "Lower Heavy", focus: "Base de pernas com tensão alta" },
    { id: "d", name: "Push Volume", focus: "Refino estético de peitoral, ombro e tríceps" },
    { id: "e", name: "Pull Volume", focus: "Costas, deltoide posterior e braços" },
    { id: "f", name: "Lower Shape", focus: "Glúteos, posterior e acabamento" },
  ],
};

const state = {
  step: 0,
  profile: {
    name: "",
    sex: "masculino",
    age: "",
    height: "",
    weight: "",
    level: "intermediário",
    experienceMonths: "12",
    goal: "Hipertrofia",
    daysPerWeek: "5",
    minutesPerWorkout: "60",
    cardioLevel: "médio",
    sedentaryHistory: "não",
    pain: "",
    injury: "",
    mobility: "moderada",
    priorityMuscles: ["Peito", "Costas"],
    aestheticFocus: "melhorar definição geral e aparência atlética",
    preferenceStyle: "intenso",
    likes: ["Halteres", "Polia"],
    dislikes: ["Burpee"],
    confidence: "média",
    gymType: "completa",
    preferredTool: "misto",
    equipment: [...EQUIPMENT],
  },
  plan: null,
  selectedDay: 0,
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function initialize() {
  renderPills("priorityMuscles", prioritiesBase, state.profile.priorityMuscles, "priorityMuscles");
  renderPills("likes", likesBase, state.profile.likes, "likes");
  renderPills("dislikes", dislikesBase, state.profile.dislikes, "dislikes");
  renderEquipment();
  bindInputs();
  bindStepButtons();
  bindMobileNav();
  bindSessionButtons();
  updateProgress();
}

function bindInputs() {
  ["name","age","height","weight","experienceMonths","pain","injury","aestheticFocus"].forEach((id) => {
    const el = document.getElementById(id);
    if (state.profile[id] !== undefined) el.value = state.profile[id];
    el.addEventListener("input", (e) => { state.profile[id] = e.target.value; saveProfileState(); });
  });
  ["sex","level","goal","daysPerWeek","minutesPerWorkout","cardioLevel","sedentaryHistory","mobility","preferenceStyle","confidence","gymType","preferredTool"].forEach((id) => {
    const el = document.getElementById(id);
    if (state.profile[id] !== undefined) el.value = state.profile[id];
    el.addEventListener("change", (e) => { state.profile[id] = e.target.value; saveProfileState(); });
  });

  $("#startBtn").addEventListener("click", () => goToStep(1));
  $("#resetBtn").addEventListener("click", resetAll);
  $("#generateBtn").addEventListener("click", generateAndRender);
  $("#regenerateBtn").addEventListener("click", generateAndRender);
}

function bindStepButtons() {
  $$(".next-btn").forEach((btn) => btn.addEventListener("click", () => goToStep(Number(btn.dataset.next))));
  $$(".prev-btn").forEach((btn) => btn.addEventListener("click", () => goToStep(Number(btn.dataset.prev))));
  $$(".step-chip").forEach((chip) => chip.addEventListener("click", () => {
    const target = Number(chip.dataset.step);
    if (target === 3 && !state.plan) return;
    goToStep(target);
  }));
}

function goToStep(step) {
  state.step = step;
  $$(".step-panel").forEach((panel) => panel.classList.remove("active"));
  $("#step-" + step).classList.add("active");
  $$(".step-chip").forEach((chip) => chip.classList.toggle("active", Number(chip.dataset.step) === step));
  updateProgress();
  document.querySelectorAll('.mobile-nav button').forEach((btn) => btn.classList.toggle('active', Number(btn.dataset.mobileStep) === step));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProgress() {
  const pct = ((state.step + 1) / 4) * 100;
  $("#progressFill").style.width = pct + "%";
  $("#progressText").textContent = `Etapa ${state.step + 1} de 4`;
}

function resetAll() {
  location.reload();
}

function renderPills(containerId, options, selected, field) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pill" + (selected.includes(opt) ? " active" : "");
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      const list = state.profile[field];
      state.profile[field] = list.includes(opt) ? list.filter((x) => x !== opt) : [...list, opt];
      renderPills(containerId, options, state.profile[field], field); saveProfileState();
    });
    container.appendChild(btn);
  });
}

function renderEquipment() {
  const wrap = $("#equipmentList");
  wrap.innerHTML = "";
  EQUIPMENT.forEach((eq) => {
    const label = document.createElement("label");
    label.className = "check-item";
    label.innerHTML = `<input type="checkbox" ${state.profile.equipment.includes(eq) ? "checked" : ""}/> <span>${eq}</span>`;
    label.querySelector("input").addEventListener("change", () => {
      const list = state.profile.equipment;
      state.profile.equipment = list.includes(eq) ? list.filter((x) => x !== eq) : [...list, eq];
      renderEquipment(); saveProfileState();
    });
    wrap.appendChild(label);
  });
}

function scoreExercise(ex, profile, day) {
  let s = 0;
  const userEquipment = new Set(profile.equipment);
  const hasEquipment = ex.equipment.some((e) => userEquipment.has(e));
  if (!hasEquipment) return -999;

  const goalMap = {
    "Emagrecimento": ["emagrecimento", "segurança", "controle", "baixo impacto"],
    "Hipertrofia": ["hipertrofia", "estético", "densidade", "controle"],
    "Recomposição corporal": ["hipertrofia", "emagrecimento", "controle"],
    "Ganho de força": ["força", "segurança"],
    "Condicionamento": ["baixo impacto", "controle"],
    "Foco estético": ["estético", "controle", "hipertrofia"],
  };
  (goalMap[profile.goal] || []).forEach((tag) => ex.tags.includes(tag) && (s += 8));
  if (ex.level.includes(profile.level)) s += 8;
  if (Number(profile.minutesPerWorkout) <= 45 && ex.time === "Curto") s += 6;
  if (Number(profile.minutesPerWorkout) >= 60 && ex.time === "Médio") s += 4;
  if (profile.likes.some((l) => ex.name.toLowerCase().includes(l.toLowerCase()) || ex.equipment.some((e) => e.toLowerCase().includes(l.toLowerCase())))) s += 6;
  if (profile.dislikes.some((d) => ex.name.toLowerCase().includes(d.toLowerCase()))) s -= 10;
  if ((profile.pain + " " + profile.injury).toLowerCase().includes("lomb") && ex.jointFriendly) s += 8;
  if ((profile.pain + " " + profile.injury).toLowerCase().includes("joelho") && ex.category === "legs" && ex.jointFriendly) s += 7;
  if (["Emagrecimento", "Condicionamento", "Recomposição corporal"].includes(profile.goal) && ex.category === "cardio") s += 10;
  if (profile.priorityMuscles.includes(ex.primary)) s += 12;
  if (profile.sex === "feminino" && ["Glúteos", "Posterior", "Quadríceps"].includes(ex.primary) && profile.priorityMuscles.includes("Glúteos")) s += 6;
  if (profile.preferenceStyle === "técnico" && ex.jointFriendly) s += 4;
  if (profile.preferenceStyle === "prático" && ex.time === "Curto") s += 4;
  if (profile.confidence === "baixa" && ex.jointFriendly) s += 6;

  const focusText = `${day.name} ${day.focus}`.toLowerCase();
  if (focusText.includes("push") && ex.category === "push") s += 20;
  if (focusText.includes("pull") && ex.category === "pull") s += 20;
  if (focusText.includes("lower") && ["legs", "posterior", "glutes", "calves"].includes(ex.category)) s += 20;
  if (focusText.includes("full body") && ["push", "pull", "legs", "posterior", "glutes", "core"].includes(ex.category)) s += 10;
  if (focusText.includes("ombros") && ex.primary === "Ombros") s += 10;
  if (focusText.includes("costas") && ex.primary === "Costas") s += 10;
  if (focusText.includes("quadríceps") && ex.primary === "Quadríceps") s += 10;
  if (focusText.includes("glúteos") && ex.primary === "Glúteos") s += 10;
  if (focusText.includes("posterior") && ex.primary === "Posterior") s += 10;
  if (focusText.includes("braços") && ex.primary === "Braços") s += 10;
  return s;
}

function buildPrescription(ex, profile) {
  const beginner = profile.level === "iniciante";
  const advanced = profile.level === "avançado";
  const goal = profile.goal;
  let sets = beginner ? 3 : advanced ? 4 : 3;
  let reps = "8–12";
  let rest = goal === "Emagrecimento" ? "45–75s" : "60–90s";
  let intensity = goal === "Ganho de força" ? "Alta" : goal === "Emagrecimento" ? "Moderada/alta" : "Moderada";

  if (goal === "Ganho de força" && ["push", "pull", "legs", "posterior"].includes(ex.category)) { sets = advanced ? 5 : 4; reps = "4–6"; rest = "90–150s"; intensity = "Alta"; }
  if (goal === "Hipertrofia") { reps = ex.category === "cardio" ? "10–15 min" : "6–12"; sets = ex.category === "cardio" ? 1 : advanced ? 4 : 3; rest = ex.category === "cardio" ? "—" : "60–90s"; }
  if (["Emagrecimento", "Recomposição corporal"].includes(goal)) { reps = ex.category === "cardio" ? "12–20 min" : "10–15"; sets = ex.category === "cardio" ? 1 : 3; rest = ex.category === "cardio" ? "—" : "45–75s"; }
  if (Number(profile.minutesPerWorkout) <= 45 && ex.category !== "cardio") sets = Math.max(2, sets - 1);
  if ((profile.pain + " " + profile.injury).toLowerCase().includes("lomb") && !ex.jointFriendly) { intensity = "Técnica / controlada"; rest = "75–90s"; }

  const cadence = ex.category === "cardio" ? "Ritmo orientado por percepção de esforço" : (ex.primary === "Peito" || ex.primary === "Costas") ? "2s desce • 1s sobe • controle total" : "Controle na excêntrica e contração consciente";
  const notes = [];
  if (profile.priorityMuscles.includes(ex.primary)) notes.push(`Este exercício entrou porque ${ex.primary.toLowerCase()} é prioridade no seu físico.`);
  if (profile.goal === "Emagrecimento" && ex.category !== "cardio") notes.push("Use execução limpa e pouco descanso para aumentar densidade sem virar bagunça.");
  if (profile.goal === "Hipertrofia") notes.push("Foque em progressão de carga e qualidade de contração ao longo das semanas.");
  if (profile.confidence === "baixa") notes.push("Priorize controle absoluto antes de subir peso.");

  return { sets, reps, rest, intensity, cadence, coachNote: notes.join(" ") || "Exercício selecionado para combinar eficiência, segurança e estímulo de alto nível para o seu perfil." };
}

function generatePlan(profile) {
  const days = splitTemplates[Number(profile.daysPerWeek)] || splitTemplates[5];
  const plannedDays = days.map((day) => {
    const ranked = EXERCISES.map((ex) => ({ ex, score: scoreExercise(ex, profile, day) }))
      .filter((x) => x.score > -100)
      .sort((a, b) => b.score - a.score);

    const chosen = [];
    const usedCategories = new Set();
    ranked.forEach(({ ex }) => {
      if (chosen.length >= 6) return;
      if (ex.category === "cardio") return;
      if (usedCategories.has(ex.category) && chosen.length < 4) return;
      chosen.push({ ...ex, prescription: buildPrescription(ex, profile) });
      usedCategories.add(ex.category);
    });

    if (["Emagrecimento", "Condicionamento", "Recomposição corporal"].includes(profile.goal)) {
      const cardio = ranked.find(({ ex }) => ex.category === "cardio");
      if (cardio) chosen.push({ ...cardio.ex, prescription: buildPrescription(cardio.ex, profile) });
    }

    let warmup = "5 min de cardio leve + mobilidade de ombros/escápulas + 2 séries de aquecimento do primeiro exercício.";
    if ((profile.pain + " " + profile.injury).toLowerCase().includes("joelho")) warmup = "5 min de bike + mobilidade leve de tornozelo/quadril + 2 séries de ativação controlada.";
    else if ((profile.pain + " " + profile.injury).toLowerCase().includes("lomb")) warmup = "5 min de caminhada + respiração/bracing + ativação de glúteos e escápulas.";
    else if (day.name.toLowerCase().includes("lower") || day.name.toLowerCase().includes("full body")) warmup = "5–7 min de cardio leve + mobilidade de quadril/tornozelo + 2 séries leves do primeiro movimento.";

    const toneGoal = profile.goal === "Hipertrofia" ? "Hoje o foco é gerar tensão mecânica de qualidade, com progressão e execução refinada." :
      profile.goal === "Emagrecimento" ? "Hoje vamos priorizar eficiência, densidade e gasto energético sem sacrificar massa muscular." :
      profile.goal === "Recomposição corporal" ? "Hoje a ideia é combinar estímulo de hipertrofia com ritmo suficiente para melhorar composição corporal." :
      profile.goal === "Ganho de força" ? "Hoje o treino foi montado para melhorar produção de força com escolhas mais estáveis e estratégicas." :
      "Hoje o foco é desempenho funcional com estrutura inteligente e sustentável.";
    const priority = profile.priorityMuscles.length ? ` Priorizamos ${profile.priorityMuscles.slice(0,2).join(" e ").toLowerCase()} por serem pontos-chave do seu objetivo.` : "";
    const limitation = (profile.pain || profile.injury) ? ` Também ajustei o treino considerando seu relato de ${profile.pain || profile.injury}.` : "";

    return {
      ...day,
      warmup,
      coachSummary: toneGoal + priority + limitation,
      intensity: profile.goal === "Emagrecimento" ? 82 : profile.goal === "Hipertrofia" ? 76 : profile.goal === "Ganho de força" ? 84 : 74,
      exercises: chosen,
    };
  });

  const weeklyVolume = prioritiesBase.map((muscle) => ({
    muscle,
    sets: plannedDays.reduce((acc, day) => acc + day.exercises.reduce((sum, ex) => sum + (ex.primary === muscle ? Number(ex.prescription.sets) || 0 : 0), 0), 0),
  })).filter((x) => x.sets > 0);

  const profileRead = `Perfil lido como ${profile.level} com foco principal em ${profile.goal.toLowerCase()}, ${profile.daysPerWeek}x por semana e ${profile.minutesPerWorkout} min por sessão. O plano foi ajustado para ${profile.aestheticFocus || "melhorar o físico de forma estratégica"} sem cair em treinos genéricos.`;
  const progression = profile.goal === "Hipertrofia" ? "Quando atingir o topo da faixa de repetições com execução limpa em todas as séries, aumente a carga de 2% a 5%." : profile.goal === "Ganho de força" ? "Suba carga de forma conservadora e registre desempenho semanal dos exercícios base." : "Tente aumentar reps, controle técnico ou leve carga ao longo das semanas sem perder qualidade.";
  const cardioStrategy = profile.goal === "Emagrecimento" ? "Use 2–4 sessões curtas de cardio inteligente por semana. O objetivo é somar gasto energético sem destruir recuperação." : profile.goal === "Recomposição corporal" ? "Cardio moderado em 2–3 sessões ajuda a melhorar composição corporal sem competir demais com a musculação." : "Cardio complementar conforme energia, saúde e objetivo global.";

  return { profileRead, progression, cardioStrategy, days: plannedDays, weeklyVolume };
}

function generateAndRender() {
  state.plan = generatePlan(state.profile);
  state.selectedDay = 0;
  renderPlan();
  goToStep(3);
}

function renderPlan() {
  const { profile, plan } = state;
  $("#planHeadline").textContent = profile.name ? `${profile.name}, este plano foi desenhado para você.` : "Seu plano personalizado está pronto.";
  $("#profileRead").textContent = plan.profileRead;
  $("#readLevel").textContent = profile.level;
  $("#readGoal").textContent = profile.goal;
  $("#readDays").textContent = `${profile.daysPerWeek}x/sem`;
  $("#readMinutes").textContent = `${profile.minutesPerWorkout} min`;
  $("#cardioStrategy").textContent = plan.cardioStrategy;
  $("#coachHighlightTitle").textContent = profile.name ? `${profile.name}, seu treino parece de produto premium de verdade.` : 'Seu treino foi refeito com lógica mais visual e mais chamativa.';
  $("#coachHighlightText").textContent = `A ficha equilibra objetivo em ${profile.goal.toLowerCase()}, preferência ${profile.preferenceStyle}, confiança ${profile.confidence} e prioridade em ${profile.priorityMuscles.join(', ').toLowerCase()}.`;
  $("#priorityRead").textContent = profile.priorityMuscles.slice(0,2).join(' / ');
  $("#styleRead").textContent = profile.preferenceStyle;
  $("#confidenceRead").textContent = profile.confidence;
  $("#sessionName").textContent = plan.days[state.selectedDay].name;

  const daysList = $("#daysList");
  daysList.innerHTML = "";
  plan.days.forEach((day, idx) => {
    const btn = document.createElement("button");
    btn.className = "day-item" + (idx === state.selectedDay ? " active" : "");
    btn.innerHTML = `<strong>${day.name}</strong><small>${day.focus}</small>`;
    btn.addEventListener("click", () => {
      state.selectedDay = idx;
      renderPlan();
    });
    daysList.appendChild(btn);
  });

  const selected = plan.days[state.selectedDay];
  $("#dayTitle").textContent = selected.name;
  $("#dayFocus").textContent = selected.focus;
  $("#dayIntensity").textContent = `${selected.intensity}%`;
  $("#dayWarmup").textContent = selected.warmup;
  $("#dayCoachSummary").textContent = selected.coachSummary;
  $("#progression").textContent = plan.progression;

  const weeklyVolumeList = $("#weeklyVolumeList");
  weeklyVolumeList.innerHTML = "";
  plan.weeklyVolume.forEach((item) => {
    const row = document.createElement("div");
    row.className = "volume-row";
    row.innerHTML = `
      <div class="volume-head"><span>${item.muscle}</span><strong>${item.sets} séries</strong></div>
      <div class="volume-track"><div class="volume-fill" style="width:${Math.min(100, item.sets * 6)}%"></div></div>
    `;
    weeklyVolumeList.appendChild(row);
  });

  const exerciseList = $("#exerciseList");
  exerciseList.innerHTML = "";
  selected.exercises.forEach((ex) => {
    const card = document.createElement("article");
    card.className = "exercise-card";
    card.innerHTML = `
      <div class="exercise-visual" data-open-demo="${ex.id}">
        <div class="visual-box">
          <div class="icon">▶</div>
          <h4>Guia visual animado</h4>
          <p>${ex.visual}</p>
        </div>
      </div>
      <div class="exercise-info">
        <div class="exercise-top">
          <div>
            <h4>${ex.name}</h4>
            <p>Principal: ${ex.primary} • Secundários: ${ex.muscles.filter((m) => m !== ex.primary).join(", ")}</p>
          </div>
          <div class="exercise-badges">
            <span class="badge primary">${ex.prescription.sets} séries</span>
            <span class="badge">${ex.prescription.reps}</span>
            <span class="badge">Descanso ${ex.prescription.rest}</span>
          </div>
        </div>
        <div class="exercise-meta">
          <div class="meta-card">
            <span>Execução</span>
            <p>${ex.tip}</p>
            <p class="muted">Cadência sugerida: ${ex.prescription.cadence}</p>
          </div>
          <div class="meta-card">
            <span>Erros comuns</span>
            <p>${ex.errors}</p>
            <p class="muted">Intensidade-alvo: ${ex.prescription.intensity}</p>
          </div>
        </div>
        <label class="exercise-check"><input type="checkbox" class="exercise-done" ${state.completed[currentDayKey() + ':' + ex.id] ? 'checked' : ''}/> Marcar como concluído</label>
        <div class="coach-note"><strong>Observação do treinador:</strong> ${ex.prescription.coachNote}</div>
      </div>
    `;
    const done = card.querySelector('.exercise-done');
    if (state.completed[currentDayKey() + ':' + ex.id]) card.classList.add('completed');
    done.addEventListener('change', () => {
      const key = currentDayKey() + ':' + ex.id;
      if (done.checked) { state.completed[key] = true; card.classList.add('completed'); }
      else { delete state.completed[key]; card.classList.remove('completed'); }
      saveProfileState();
    });
    card.querySelector('.exercise-visual').addEventListener('click', () => openDemo(ex));
    exerciseList.appendChild(card);
  });
}

initialize();


function animationType(category) {
  if (category === "push") return "supino";
  if (category === "pull") return "row";
  if (["legs","posterior","glutes","calves"].includes(category)) return category === "glutes" ? "abductor" : "squat";
  if (category === "cardio") return "cardio";
  return "core";
}

function demoMarkup(type, ex) {
  if (type === "supino") {
    return `
      <div class="demo-figure anim-supino">
        <div class="demo-floor"></div>
        <div class="demo-machine platform" style="top:64%;left:26%;width:48%;height:5%"></div>
        <div class="demo-person">
          <div class="head" style="left:28%;top:45%"></div>
          <div class="torso" style="left:35%;top:43%;width:26%;height:10%;border-radius:20px"></div>
          <div class="hip" style="left:56%;top:44%;width:14%;height:8%"></div>
          <div class="leg left" style="left:67%;top:45%;width:4%;height:16%;transform:rotate(35deg)"></div>
          <div class="leg right" style="left:73%;top:45%;width:4%;height:16%;transform:rotate(15deg)"></div>
          <div class="shin left" style="left:74%;top:56%;width:4%;height:16%;transform:rotate(-30deg)"></div>
          <div class="shin right" style="left:78%;top:57%;width:4%;height:16%;transform:rotate(-15deg)"></div>
          <div class="arm left arms-track" style="left:44%;top:34%;width:3%;height:15%;transform:rotate(-62deg)"></div>
          <div class="arm right arms-track" style="left:55%;top:34%;width:3%;height:15%;transform:rotate(62deg)"></div>
          <div class="bar demo-bar bar-track" style="left:37%;top:25%;width:28%"></div>
          <div class="demo-weight bar-track" style="left:31%;top:23%;width:8%"></div>
          <div class="demo-weight bar-track" style="left:64%;top:23%;width:8%"></div>
        </div>
        <div class="demo-label">Empurrar com controle</div>
      </div>`;
  }
  if (type === "row") {
    return `
      <div class="demo-figure anim-row">
        <div class="demo-floor"></div>
        <div class="demo-person row-track">
          <div class="head" style="left:48%;top:12%"></div>
          <div class="torso" style="left:45%;top:24%;height:22%;transform:rotate(18deg)"></div>
          <div class="hip" style="left:43.5%;top:45%"></div>
          <div class="arm left" style="left:43%;top:27%;transform:rotate(30deg)"></div>
          <div class="arm right" style="right:43%;top:27%;transform:rotate(-30deg)"></div>
          <div class="forearm left" style="left:40%;top:39%;transform:rotate(34deg)"></div>
          <div class="forearm right" style="right:40%;top:39%;transform:rotate(-34deg)"></div>
          <div class="leg left" style="left:44.5%;top:50%;transform:rotate(8deg)"></div>
          <div class="leg right" style="right:44.5%;top:50%;transform:rotate(-8deg)"></div>
          <div class="shin left" style="left:43%;top:66%;transform:rotate(8deg)"></div>
          <div class="shin right" style="right:43%;top:66%;transform:rotate(-8deg)"></div>
          <div class="demo-weight" style="left:33%;top:48%;width:9%"></div>
          <div class="demo-weight" style="left:59%;top:48%;width:9%"></div>
        </div>
        <div class="demo-label">Puxar com escápulas ativas</div>
      </div>`;
  }
  if (type === "squat") {
    return `
      <div class="demo-figure anim-squat">
        <div class="demo-floor"></div>
        <div class="demo-person body-track">
          <div class="head"></div>
          <div class="torso"></div>
          <div class="hip"></div>
          <div class="arm left" style="left:39%;top:25%;transform:rotate(15deg)"></div>
          <div class="arm right" style="right:39%;top:25%;transform:rotate(-15deg)"></div>
          <div class="leg left" style="left:44.5%;top:50%;transform:rotate(12deg)"></div>
          <div class="leg right" style="right:44.5%;top:50%;transform:rotate(-12deg)"></div>
          <div class="shin left" style="left:41.5%;top:66%;transform:rotate(-12deg)"></div>
          <div class="shin right" style="right:41.5%;top:66%;transform:rotate(12deg)"></div>
        </div>
        <div class="demo-bar" style="left:34%;top:28%;width:32%"></div>
        <div class="demo-weight" style="left:26%;top:26%;width:10%"></div>
        <div class="demo-weight" style="left:64%;top:26%;width:10%"></div>
        <div class="demo-label">Descer estável • subir empurrando o chão</div>
      </div>`;
  }
  if (type === "abductor") {
    return `
      <div class="demo-figure anim-abductor">
        <div class="demo-floor"></div>
        <div class="demo-machine seat"></div>
        <div class="demo-machine back"></div>
        <div class="demo-machine rail"></div>
        <div class="demo-machine pad pad-track"></div>
        <div class="demo-machine pad pad-track" style="right:auto; left:19%"></div>
        <div class="demo-person">
          <div class="head" style="left:42%;top:18%"></div>
          <div class="torso" style="left:41%;top:29%;height:18%"></div>
          <div class="arm left" style="left:38%;top:31%;height:14%;transform:rotate(14deg)"></div>
          <div class="arm right" style="right:38%;top:31%;height:14%;transform:rotate(-14deg)"></div>
          <div class="leg left pad-track" style="left:37%;top:50%;width:4%;height:17%;transform:rotate(22deg)"></div>
          <div class="leg right pad-track" style="right:37%;top:50%;width:4%;height:17%;transform:rotate(-22deg)"></div>
          <div class="shin left pad-track" style="left:29%;top:64%;width:4%;height:13%;transform:rotate(86deg)"></div>
          <div class="shin right pad-track" style="right:29%;top:64%;width:4%;height:13%;transform:rotate(-86deg)"></div>
        </div>
        <div class="demo-label">Abrir com pausa no pico</div>
      </div>`;
  }
  if (type === "cardio") {
    return `
      <div class="demo-figure anim-cardio">
        <div class="demo-floor"></div>
        <div class="demo-person cardio-track">
          <div class="head"></div>
          <div class="torso"></div>
          <div class="arm left" style="left:42%;top:25%;transform:rotate(35deg)"></div>
          <div class="arm right" style="right:42%;top:25%;transform:rotate(-35deg)"></div>
          <div class="leg left" style="left:45%;top:50%;transform:rotate(35deg)"></div>
          <div class="leg right" style="right:45%;top:50%;transform:rotate(-18deg)"></div>
          <div class="shin left" style="left:50%;top:66%;transform:rotate(-22deg)"></div>
          <div class="shin right" style="right:39%;top:66%;transform:rotate(18deg)"></div>
        </div>
        <div class="demo-label">Ritmo e mecânica consistentes</div>
      </div>`;
  }
  return `
    <div class="demo-figure anim-core">
      <div class="demo-floor"></div>
      <div class="demo-person core-track">
        <div class="head"></div>
        <div class="torso" style="left:44%;top:26%;height:20%"></div>
        <div class="hip" style="top:46%"></div>
        <div class="leg left" style="left:44.5%;top:50%;transform:rotate(5deg)"></div>
        <div class="leg right" style="right:44.5%;top:50%;transform:rotate(-5deg)"></div>
        <div class="shin left" style="left:43.6%;top:66%;transform:rotate(5deg)"></div>
        <div class="shin right" style="right:43.6%;top:66%;transform:rotate(-5deg)"></div>
      </div>
      <div class="demo-label">Estabilidade e alinhamento</div>
    </div>`;
}

function openDemo(ex) {
  document.getElementById('demoModal').classList.remove('hidden');
  document.getElementById('demoTitle').textContent = ex.name;
  document.getElementById('demoPrimary').textContent = `Principal: ${ex.primary} • Secundários: ${ex.muscles.filter((m) => m !== ex.primary).join(', ')}`;
  document.getElementById('demoVisual').textContent = ex.visual;
  document.getElementById('demoTip').textContent = ex.tip;
  document.getElementById('demoErrors').textContent = ex.errors;
  document.getElementById('demoStage').innerHTML = realisticDemoSVG(animationType(ex.category), ex);
  document.body.style.overflow = 'hidden';
}

function closeDemo() {
  document.getElementById('demoModal').classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'demoBackdrop' || e.target.id === 'closeDemo') closeDemo();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDemo();
});

let workoutTimer = null;
let workoutSeconds = 0;
state.completed = JSON.parse(localStorage.getItem('eliteCompleted') || '{}');
const savedProfile = localStorage.getItem('eliteProfile');
if (savedProfile) {
  try { state.profile = { ...state.profile, ...JSON.parse(savedProfile) }; } catch(e) {}
}

function saveProfileState() {
  localStorage.setItem('eliteProfile', JSON.stringify(state.profile));
  localStorage.setItem('eliteCompleted', JSON.stringify(state.completed));
}

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function startWorkoutTimer() {
  if (workoutTimer) return;
  workoutTimer = setInterval(() => {
    workoutSeconds += 1;
    document.getElementById('sessionTimer').textContent = formatTime(workoutSeconds);
  }, 1000);
}

function resetWorkoutTimer() {
  if (workoutTimer) clearInterval(workoutTimer);
  workoutTimer = null;
  workoutSeconds = 0;
  const el = document.getElementById('sessionTimer');
  if (el) el.textContent = '00:00';
}

function currentDayKey() {
  if (!state.plan) return 'none';
  return `${state.profile.goal}-${state.profile.daysPerWeek}-${state.selectedDay}`;
}

function bindMobileNav() {
  document.querySelectorAll('.mobile-nav button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = Number(btn.dataset.mobileStep);
      if (target === 3 && !state.plan) return;
      goToStep(target);
    });
  });
}

function bindSessionButtons() {
  const start = document.getElementById('startWorkoutBtn');
  const reset = document.getElementById('resetWorkoutBtn');
  if (start) start.addEventListener('click', startWorkoutTimer);
  if (reset) reset.addEventListener('click', () => {
    resetWorkoutTimer();
    const dayKey = currentDayKey();
    Object.keys(state.completed).filter((k) => k.startsWith(dayKey + ':')).forEach((k) => delete state.completed[k]);
    saveProfileState();
    if (state.plan) renderPlan();
  });
}

function realisticDemoSVG(type, ex) {
  const palette = { skin: '#f4f7fb', suit1: '#57ddff', suit2: '#284a7c', accent: '#d975ff', glow: '#59f1ff' };
  const base = (content, label='Movimento guiado') => `
    <div class="demo-hint">${label}</div>
    <svg class="demo-svg" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="suit" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${palette.suit1}"/><stop offset="1" stop-color="${palette.suit2}"/></linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${palette.glow}"/><stop offset="1" stop-color="${palette.accent}"/></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="${palette.glow}"/></marker>
      </defs>
      <rect x="0" y="0" width="700" height="700" rx="34" fill="rgba(255,255,255,0.01)"/>
      <ellipse cx="350" cy="610" rx="230" ry="18" fill="rgba(89,241,255,0.12)"/>
      ${content}
    </svg>`;

  if (type === 'supino') {
    return base(`
      <g>
        <rect x="185" y="420" width="330" height="22" rx="11" fill="rgba(255,255,255,0.16)"/>
        <rect x="230" y="444" width="32" height="100" rx="16" fill="rgba(255,255,255,0.08)"/>
        <rect x="438" y="444" width="32" height="100" rx="16" fill="rgba(255,255,255,0.08)"/>
        <circle cx="258" cy="370" r="28" fill="${palette.skin}"/>
        <rect x="275" y="352" width="125" height="46" rx="22" fill="url(#suit)"/>
        <rect x="392" y="358" width="65" height="34" rx="17" fill="#7082a5"/>
        <rect x="438" y="382" width="26" height="98" rx="13" fill="${palette.skin}" transform="rotate(26 438 382)"/>
        <rect x="460" y="462" width="24" height="86" rx="12" fill="${palette.skin}" transform="rotate(-16 460 462)"/>
        <rect x="414" y="330" width="16" height="88" rx="8" fill="${palette.skin}" transform="rotate(60 414 330)"><animateTransform attributeName="transform" type="rotate" values="60 414 330;75 414 330;60 414 330" dur="2.4s" repeatCount="indefinite"/></rect>
        <rect x="320" y="334" width="16" height="88" rx="8" fill="${palette.skin}" transform="rotate(-60 320 334)"><animateTransform attributeName="transform" type="rotate" values="-60 320 334;-75 320 334;-60 320 334" dur="2.4s" repeatCount="indefinite"/></rect>
        <rect x="265" y="270" width="180" height="10" rx="5" fill="white" filter="url(#glow)"><animate attributeName="y" values="270;320;270" dur="2.4s" repeatCount="indefinite"/></rect>
        <ellipse cx="245" cy="275" rx="30" ry="14" fill="url(#accent)"><animate attributeName="cy" values="275;325;275" dur="2.4s" repeatCount="indefinite"/></ellipse>
        <ellipse cx="466" cy="275" rx="30" ry="14" fill="url(#accent)"><animate attributeName="cy" values="275;325;275" dur="2.4s" repeatCount="indefinite"/></ellipse>
        <path d="M520 290 C560 310 560 350 520 370" stroke="${palette.glow}" stroke-width="5" marker-end="url(#arrow)" opacity="0.9"/>
        <text x="86" y="108" fill="white" font-size="26" font-weight="700">Trajetória do empurrar</text>
        <text x="86" y="144" fill="#cfe5ff" font-size="18">Desça controlando, mantenha escápulas firmes e empurre em linha segura.</text>
      </g>
    `, 'Demo realista de supino');
  }
  if (type === 'row') {
    return base(`
      <g>
        <circle cx="360" cy="170" r="30" fill="${palette.skin}"/>
        <rect x="330" y="200" width="70" height="120" rx="28" fill="url(#suit)" transform="rotate(18 330 200)"/>
        <rect x="296" y="250" width="16" height="115" rx="8" fill="${palette.skin}" transform="rotate(38 296 250)"><animateTransform attributeName="transform" type="translate" values="0 0;-18 0;0 0" dur="2.2s" repeatCount="indefinite"/></rect>
        <rect x="402" y="248" width="16" height="115" rx="8" fill="${palette.skin}" transform="rotate(-38 402 248)"><animateTransform attributeName="transform" type="translate" values="0 0;18 0;0 0" dur="2.2s" repeatCount="indefinite"/></rect>
        <rect x="280" y="388" width="18" height="120" rx="9" fill="${palette.skin}" transform="rotate(8 280 388)"/>
        <rect x="410" y="388" width="18" height="120" rx="9" fill="${palette.skin}" transform="rotate(-8 410 388)"/>
        <rect x="260" y="504" width="16" height="96" rx="8" fill="${palette.skin}" transform="rotate(10 260 504)"/>
        <rect x="428" y="504" width="16" height="96" rx="8" fill="${palette.skin}" transform="rotate(-10 428 504)"/>
        <ellipse cx="275" cy="365" rx="36" ry="18" fill="url(#accent)"><animateTransform attributeName="transform" type="translate" values="0 0;24 0;0 0" dur="2.2s" repeatCount="indefinite"/></ellipse>
        <ellipse cx="430" cy="365" rx="36" ry="18" fill="url(#accent)"><animateTransform attributeName="transform" type="translate" values="0 0;-24 0;0 0" dur="2.2s" repeatCount="indefinite"/></ellipse>
        <path d="M540 320 C500 320 474 338 450 360" stroke="${palette.glow}" stroke-width="5" marker-end="url(#arrow)"/>
        <path d="M160 320 C200 320 226 338 250 360" stroke="${palette.glow}" stroke-width="5" marker-end="url(#arrow)"/>
        <text x="76" y="96" fill="white" font-size="26" font-weight="700">Tração horizontal</text>
        <text x="76" y="132" fill="#cfe5ff" font-size="18">Puxe cotovelos para trás e para baixo, sem jogar o tronco.</text>
      </g>
    `, 'Demo realista de remada');
  }
  if (type === 'abductor') {
    return base(`
      <g>
        <rect x="248" y="330" width="200" height="34" rx="17" fill="rgba(255,255,255,0.12)"/>
        <rect x="214" y="204" width="44" height="168" rx="20" fill="rgba(255,255,255,0.08)"/>
        <rect x="468" y="208" width="24" height="190" rx="12" fill="rgba(255,255,255,0.08)"/>
        <rect x="166" y="348" width="80" height="18" rx="9" fill="url(#accent)"><animate attributeName="x" values="184;152;184" dur="1.8s" repeatCount="indefinite"/></rect>
        <rect x="456" y="348" width="80" height="18" rx="9" fill="url(#accent)"><animate attributeName="x" values="438;470;438" dur="1.8s" repeatCount="indefinite"/></rect>
        <circle cx="346" cy="160" r="30" fill="${palette.skin}"/>
        <rect x="316" y="192" width="60" height="120" rx="26" fill="url(#suit)"/>
        <rect x="300" y="324" width="18" height="118" rx="9" fill="${palette.skin}" transform="rotate(22 300 324)"><animateTransform attributeName="transform" type="rotate" values="18 300 324;30 300 324;18 300 324" dur="1.8s" repeatCount="indefinite"/></rect>
        <rect x="384" y="324" width="18" height="118" rx="9" fill="${palette.skin}" transform="rotate(-22 384 324)"><animateTransform attributeName="transform" type="rotate" values="-18 384 324;-30 384 324;-18 384 324" dur="1.8s" repeatCount="indefinite"/></rect>
        <rect x="258" y="220" width="14" height="86" rx="7" fill="${palette.skin}" transform="rotate(12 258 220)"/>
        <rect x="420" y="220" width="14" height="86" rx="7" fill="${palette.skin}" transform="rotate(-12 420 220)"/>
        <path d="M146 372 C184 390 216 390 238 372" stroke="${palette.glow}" stroke-width="5" marker-end="url(#arrow)"/>
        <path d="M552 372 C514 390 482 390 460 372" stroke="${palette.glow}" stroke-width="5" marker-end="url(#arrow)"/>
        <text x="84" y="96" fill="white" font-size="26" font-weight="700">Abertura com pausa</text>
        <text x="84" y="132" fill="#cfe5ff" font-size="18">Abra controlando, segure 1–2 segundos e retorne sem bater as placas.</text>
      </g>
    `, 'Demo realista de abdutora');
  }
  if (type === 'squat') {
    return base(`
      <g>
        <circle cx="350" cy="150" r="30" fill="${palette.skin}"/>
        <rect x="320" y="182" width="60" height="130" rx="26" fill="url(#suit)"><animate attributeName="y" values="182;236;182" dur="2.2s" repeatCount="indefinite"/></rect>
        <rect x="276" y="220" width="14" height="96" rx="7" fill="${palette.skin}" transform="rotate(18 276 220)"><animateTransform attributeName="transform" type="rotate" values="14 276 220;28 276 220;14 276 220" dur="2.2s" repeatCount="indefinite"/></rect>
        <rect x="410" y="220" width="14" height="96" rx="7" fill="${palette.skin}" transform="rotate(-18 410 220)"><animateTransform attributeName="transform" type="rotate" values="-14 410 220;-28 410 220;-14 410 220" dur="2.2s" repeatCount="indefinite"/></rect>
        <rect x="315" y="320" width="18" height="132" rx="9" fill="${palette.skin}" transform="rotate(10 315 320)"><animateTransform attributeName="transform" type="rotate" values="8 315 320;34 315 320;8 315 320" dur="2.2s" repeatCount="indefinite"/></rect>
        <rect x="367" y="320" width="18" height="132" rx="9" fill="${palette.skin}" transform="rotate(-10 367 320)"><animateTransform attributeName="transform" type="rotate" values="-8 367 320;-34 367 320;-8 367 320" dur="2.2s" repeatCount="indefinite"/></rect>
        <rect x="286" y="444" width="16" height="112" rx="8" fill="${palette.skin}" transform="rotate(-6 286 444)"><animateTransform attributeName="transform" type="rotate" values="-6 286 444;24 286 444;-6 286 444" dur="2.2s" repeatCount="indefinite"/></rect>
        <rect x="398" y="444" width="16" height="112" rx="8" fill="${palette.skin}" transform="rotate(6 398 444)"><animateTransform attributeName="transform" type="rotate" values="6 398 444;-24 398 444;6 398 444" dur="2.2s" repeatCount="indefinite"/></rect>
        <rect x="220" y="210" width="260" height="10" rx="5" fill="white" filter="url(#glow)"/>
        <ellipse cx="205" cy="215" rx="34" ry="16" fill="url(#accent)"/>
        <ellipse cx="495" cy="215" rx="34" ry="16" fill="url(#accent)"/>
        <path d="M550 420 C505 420 470 405 438 366" stroke="${palette.glow}" stroke-width="5" marker-end="url(#arrow)"/>
        <path d="M150 420 C195 420 230 405 262 366" stroke="${palette.glow}" stroke-width="5" marker-end="url(#arrow)"/>
        <text x="82" y="96" fill="white" font-size="26" font-weight="700">Padrão de agachar</text>
        <text x="82" y="132" fill="#cfe5ff" font-size="18">Desça com joelhos alinhados aos pés e suba empurrando o chão.</text>
      </g>
    `, 'Demo realista de agachamento');
  }
  if (type === 'cardio') {
    return base(`
      <g>
        <circle cx="350" cy="150" r="30" fill="${palette.skin}"/>
        <rect x="320" y="182" width="60" height="130" rx="26" fill="url(#suit)"><animateTransform attributeName="transform" type="translate" values="0 0;8 4;0 0" dur="0.9s" repeatCount="indefinite"/></rect>
        <rect x="302" y="228" width="14" height="94" rx="7" fill="${palette.skin}" transform="rotate(30 302 228)"><animateTransform attributeName="transform" type="rotate" values="30 302 228;-20 302 228;30 302 228" dur="0.9s" repeatCount="indefinite"/></rect>
        <rect x="382" y="228" width="14" height="94" rx="7" fill="${palette.skin}" transform="rotate(-30 382 228)"><animateTransform attributeName="transform" type="rotate" values="-30 382 228;20 382 228;-30 382 228" dur="0.9s" repeatCount="indefinite"/></rect>
        <rect x="320" y="322" width="18" height="140" rx="9" fill="${palette.skin}" transform="rotate(30 320 322)"><animateTransform attributeName="transform" type="rotate" values="30 320 322;-18 320 322;30 320 322" dur="0.9s" repeatCount="indefinite"/></rect>
        <rect x="364" y="322" width="18" height="140" rx="9" fill="${palette.skin}" transform="rotate(-20 364 322)"><animateTransform attributeName="transform" type="rotate" values="-20 364 322;26 364 322;-20 364 322" dur="0.9s" repeatCount="indefinite"/></rect>
        <rect x="286" y="452" width="16" height="110" rx="8" fill="${palette.skin}" transform="rotate(-18 286 452)"><animateTransform attributeName="transform" type="rotate" values="-18 286 452;16 286 452;-18 286 452" dur="0.9s" repeatCount="indefinite"/></rect>
        <rect x="412" y="452" width="16" height="110" rx="8" fill="${palette.skin}" transform="rotate(20 412 452)"><animateTransform attributeName="transform" type="rotate" values="20 412 452;-14 412 452;20 412 452" dur="0.9s" repeatCount="indefinite"/></rect>
        <path d="M96 472 H604" stroke="rgba(255,255,255,.12)" stroke-width="14" stroke-linecap="round"/>
        <path d="M96 472 H604" stroke="url(#accent)" stroke-width="14" stroke-linecap="round" stroke-dasharray="26 18" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="0;-44" dur="1s" repeatCount="indefinite"/></path>
        <text x="84" y="96" fill="white" font-size="26" font-weight="700">Ritmo e mecânica</text>
        <text x="84" y="132" fill="#cfe5ff" font-size="18">Mantenha postura estável e cadência consistente ao longo do cardio.</text>
      </g>
    `, 'Demo realista de cardio');
  }
  return base(`
    <g>
      <circle cx="350" cy="162" r="30" fill="${palette.skin}"/>
      <rect x="322" y="196" width="56" height="118" rx="24" fill="url(#suit)"/>
      <rect x="294" y="225" width="14" height="88" rx="7" fill="${palette.skin}" transform="rotate(16 294 225)"/>
      <rect x="392" y="225" width="14" height="88" rx="7" fill="${palette.skin}" transform="rotate(-16 392 225)"/>
      <rect x="320" y="318" width="18" height="138" rx="9" fill="${palette.skin}"/>
      <rect x="362" y="318" width="18" height="138" rx="9" fill="${palette.skin}"/>
      <rect x="302" y="448" width="16" height="110" rx="8" fill="${palette.skin}"/>
      <rect x="384" y="448" width="16" height="110" rx="8" fill="${palette.skin}"/>
      <circle cx="350" cy="360" r="60" fill="rgba(89,241,255,.10)"><animate attributeName="r" values="52;68;52" dur="1.8s" repeatCount="indefinite"/></circle>
      <text x="84" y="96" fill="white" font-size="26" font-weight="700">Estabilidade do core</text>
      <text x="84" y="132" fill="#cfe5ff" font-size="18">Alinhe costelas, quadril e respiração para sustentar a postura.</text>
    </g>
  `, 'Demo realista de core');
}
