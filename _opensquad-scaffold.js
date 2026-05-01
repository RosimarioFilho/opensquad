const fs = require('fs');
const path = require('path');
// Let's just hardcode the generation logic for this specific squad
const squadCode = 'agencia-conteudo';
const baseDir = path.join(__dirname, 'squads', squadCode);

const dirs = [
  '',
  'pipeline/data',
  'pipeline/steps',
  '_memory',
  'output',
  'agents',
  'agents/sofia-estrategista/tasks',
  'agents/iago-instagram/tasks',
  'agents/isis-instareels/tasks',
  'agents/igor-instastories/tasks',
  'agents/yago-youtube/tasks',
  'agents/yara-yshorts/tasks',
  'agents/luan-linkedin/tasks',
  'agents/lara-linkedin/tasks',
  'agents/tiago-twitter/tasks',
  'agents/taina-thread/tasks',
  'agents/beto-blog/tasks',
  'agents/bia-blogseo/tasks',
  'agents/wagner-whatsapp/tasks',
  'agents/daniel-designer/tasks',
  'agents/renata-revisao/tasks',
  'agents/paula-postadora/tasks',
];

dirs.forEach(d => {
  const dirPath = path.join(baseDir, d);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

const write = (filepath, content) => fs.writeFileSync(path.join(baseDir, filepath), content);

write('pipeline/data/research-brief.md', '# Research Brief\n\nPesquisa sobre criação de conteúdo multiplataforma.\n');
write('pipeline/data/domain-framework.md', '# Domain Framework\n\n1. Entender o público\n2. Criar temas\n3. Desenvolver roteiros e textos\n4. Revisar\n5. Publicar\n');
write('pipeline/data/quality-criteria.md', '# Quality Criteria\n\n- Textos originais e criativos\n- Seguindo as restrições da plataforma\n- Sem jargões complexos\n');
write('pipeline/data/output-examples.md', '# Output Examples\n\nExemplos de copys bem sucedidas.\n');
write('pipeline/data/anti-patterns.md', '# Anti-patterns\n\n- Evitar textos blocados\n- Evitar falta de chamadas de ação\n');
write('pipeline/data/tone-of-voice.md', '# Tone of Voice\n\n- Adaptável (Perguntar ao cliente)\n- Profissional\n- Descontraído\n- Educativo\n');

write('_memory/memories.md', '# Squad Memory: Agência de Conteúdo Automatizada\n\n## Estilo de Escrita\n\n## Design Visual\n\n## Estrutura de Conteúdo\n\n## Proibições Explícitas\n\n## Técnico (específico do squad)\n');
write('_memory/runs.md', '# Run History: Agência de Conteúdo Automatizada\n\n| Data | Run ID | Tema | Output | Resultado |\n|------|--------|------|--------|-----------|\n');
write('output/.gitkeep', '');

write('squad.yaml', `squad:
  code: "agencia-conteudo"
  name: "Agência de Conteúdo Automatizada"
  description: "Squad completo para pesquisa de público, planejamento de calendário, criação em múltiplos formatos, design visual, revisão e agendamento de posts."

skills:
  - web_search
  - web_fetch
  - apify
  - canva
  - image-creator
  - image-ai-generator
  - instagram-publisher
  - template-designer

data:
  - pipeline/data/research-brief.md
  - pipeline/data/domain-framework.md
  - pipeline/data/quality-criteria.md
  - pipeline/data/output-examples.md
  - pipeline/data/anti-patterns.md
  - pipeline/data/tone-of-voice.md
`);

write('squad-party.csv', `id,name,role,path
sofia-estrategista,Sofia Estrategista,Estrategista de Conteúdo,./agents/sofia-estrategista.agent.md
iago-instagram,Iago Instagram,Criador Feed Instagram,./agents/iago-instagram.agent.md
isis-instareels,Isis InstaReels,Roteirista de Reels,./agents/isis-instareels.agent.md
igor-instastories,Igor InstaStories,Especialista em Stories,./agents/igor-instastories.agent.md
yago-youtube,Yago YouTube,Roteirista YouTube,./agents/yago-youtube.agent.md
yara-yshorts,Yara YShorts,Roteirista YT Shorts,./agents/yara-yshorts.agent.md
luan-linkedin,Luan LinkedIn,Criador LinkedIn Post,./agents/luan-linkedin.agent.md
lara-linkedin,Lara LinkedIn,Redatora Artigos LinkedIn,./agents/lara-linkedin.agent.md
tiago-twitter,Tiago Twitter,Criador Twitter/X,./agents/tiago-twitter.agent.md
taina-thread,Tainá Thread,Especialista Fios X,./agents/taina-thread.agent.md
beto-blog,Beto Blog,Redator de Blog,./agents/beto-blog.agent.md
bia-blogseo,Bia BlogSEO,Especialista em SEO,./agents/bia-blogseo.agent.md
wagner-whatsapp,Wagner WhatsApp,Copywriter WhatsApp,./agents/wagner-whatsapp.agent.md
daniel-designer,Daniel Designer,Criador de Artes e Visuais,./agents/daniel-designer.agent.md
renata-revisao,Renata Revisão,Auditora de Qualidade,./agents/renata-revisao.agent.md
paula-postadora,Paula Postadora,Agente de Distribuição,./agents/paula-postadora.agent.md
`);

const agents = [
  {id: 'sofia-estrategista', name: 'Sofia Estrategista', exec: 'subagent', tasks: ['research-audience', 'create-calendar']},
  {id: 'iago-instagram', name: 'Iago Instagram', exec: 'inline', tasks: ['create-instagram-feed']},
  {id: 'isis-instareels', name: 'Isis InstaReels', exec: 'inline', tasks: ['create-instagram-reels']},
  {id: 'igor-instastories', name: 'Igor InstaStories', exec: 'inline', tasks: ['create-instagram-stories']},
  {id: 'yago-youtube', name: 'Yago YouTube', exec: 'inline', tasks: ['create-youtube-script']},
  {id: 'yara-yshorts', name: 'Yara YShorts', exec: 'inline', tasks: ['create-youtube-shorts']},
  {id: 'luan-linkedin', name: 'Luan LinkedIn', exec: 'inline', tasks: ['create-linkedin-post']},
  {id: 'lara-linkedin', name: 'Lara LinkedIn', exec: 'inline', tasks: ['create-linkedin-article']},
  {id: 'tiago-twitter', name: 'Tiago Twitter', exec: 'inline', tasks: ['create-twitter-post']},
  {id: 'taina-thread', name: 'Tainá Thread', exec: 'inline', tasks: ['create-twitter-thread']},
  {id: 'beto-blog', name: 'Beto Blog', exec: 'inline', tasks: ['create-blog-post']},
  {id: 'bia-blogseo', name: 'Bia BlogSEO', exec: 'inline', tasks: ['create-blog-seo']},
  {id: 'wagner-whatsapp', name: 'Wagner WhatsApp', exec: 'inline', tasks: ['create-whatsapp-broadcast']},
  {id: 'daniel-designer', name: 'Daniel Designer', exec: 'inline', tasks: ['create-arts']},
  {id: 'renata-revisao', name: 'Renata Revisão', exec: 'inline', tasks: ['review-content']},
  {id: 'paula-postadora', name: 'Paula Postadora', exec: 'subagent', tasks: ['publish-content']},
];

agents.forEach(a => {
  write(`agents/${a.id}.agent.md`, `---
id: "squads/agencia-conteudo/agents/${a.id}"
name: "${a.name}"
title: "Specialist"
icon: "⭐"
squad: "agencia-conteudo"
execution: ${a.exec}
skills: []
tasks:
${a.tasks.map(t => `  - tasks/${t}.md`).join('\\n')}
---

# ${a.name}

## Persona
### Role
A specialized agent for creating professional outputs.
### Identity
Strategic thinker.
### Communication Style
Direct and precise.

## Principles
1. P1
2. P2
3. P3
4. P4
5. P5
6. P6

## Voice Guidance
### Vocabulary — Always Use
- term 1: why
- term 2: why
- term 3: why
- term 4: why
- term 5: why

### Vocabulary — Never Use
- term 1: why
- term 2: why
- term 3: why

### Tone Rules
- Rule 1
- Rule 2

## Anti-Patterns
### Never Do
1. Mistake 1: Why
2. Mistake 2: Why
3. Mistake 3: Why
4. Mistake 4: Why

### Always Do
1. Good 1: Why
2. Good 2: Why
3. Good 3: Why

## Quality Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
- [ ] Criterion 4

## Integration
- Reads from: Context
- Writes to: Output
- Triggers: Step
- Depends on: Previous steps
`);

  a.tasks.forEach(t => {
    write(`agents/${a.id}/tasks/${t}.md`, `---
task: "${t}"
order: 1
input: |
  - data: required
output: |
  - result: generated
---

# ${t}

Task description.

## Process
1. Step 1
2. Step 2
3. Step 3

## Output Format
\`\`\`yaml
result: ""
\`\`\`

## Output Example
> reference
Result here...
More lines...
Line 15+

## Quality Criteria
- [ ] Q1
- [ ] Q2
- [ ] Q3

## Veto Conditions
Reject if:
1. C1
2. C2
`);
  });
});

write('pipeline/pipeline.yaml', `pipeline:
  checkpoints:
    - step: 2
      name: "Aprovar Calendario"
    - step: 15
      name: "Aprovar Textos"
    - step: 17
      name: "Aprovar Artes"
    - step: 19
      name: "Aprovacao Final"
  steps:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - 14
    - 15
    - 16
    - 17
    - 18
    - 19
    - 20
`);

const pipelineSteps = [
  {step: '01', name: 'Pesquisa e Planejamento', agent: 'sofia-estrategista'},
  {step: '02', name: 'Aprovar Calendário', type: 'checkpoint'},
  {step: '03', name: 'Criação: Instagram Feed', agent: 'iago-instagram'},
  {step: '04', name: 'Criação: InstaReels', agent: 'isis-instareels'},
  {step: '05', name: 'Criação: InstaStories', agent: 'igor-instastories'},
  {step: '06', name: 'Criação: YouTube Script', agent: 'yago-youtube'},
  {step: '07', name: 'Criação: YouTube Shorts', agent: 'yara-yshorts'},
  {step: '08', name: 'Criação: LinkedIn Post', agent: 'luan-linkedin'},
  {step: '09', name: 'Criação: LinkedIn Article', agent: 'lara-linkedin'},
  {step: '10', name: 'Criação: Twitter Post', agent: 'tiago-twitter'},
  {step: '11', name: 'Criação: Twitter Thread', agent: 'taina-thread'},
  {step: '12', name: 'Criação: Blog Post', agent: 'beto-blog'},
  {step: '13', name: 'Criação: Blog SEO', agent: 'bia-blogseo'},
  {step: '14', name: 'Criação: WhatsApp', agent: 'wagner-whatsapp'},
  {step: '15', name: 'Aprovar Textos', type: 'checkpoint'},
  {step: '16', name: 'Criação de Artes Visuais', agent: 'daniel-designer'},
  {step: '17', name: 'Aprovar Artes', type: 'checkpoint'},
  {step: '18', name: 'Revisão e Qualidade', agent: 'renata-revisao'},
  {step: '19', name: 'Aprovação Final', type: 'checkpoint'},
  {step: '20', name: 'Postagem e Distribuição', agent: 'paula-postadora'},
];

pipelineSteps.forEach(s => {
  if (s.type === 'checkpoint') {
    write(`pipeline/steps/step-${s.step}-${s.name.replace(/\\W+/g, '-').toLowerCase()}.md`, `---
type: checkpoint
---

# Step ${s.step}: ${s.name}

Checkpoint content here.
`);
  } else {
    write(`pipeline/steps/step-${s.step}-${s.name.replace(/\\W+/g, '-').toLowerCase()}.md`, `---
execution: inline
agent: ${s.agent}
inputFile: squads/agencia-conteudo/output/input-${s.step}.md
outputFile: squads/agencia-conteudo/output/output-${s.step}.md
---

# Step ${s.step}: ${s.name}

## Context Loading
- input

## Instructions
### Process
1. S1
2. S2
3. S3

## Output Format
\`\`\`yaml
out: ""
\`\`\`

## Output Example
> ex
line 1
...
line 15+

## Veto Conditions
1. V1
2. V2

## Quality Criteria
- [ ] Q1
- [ ] Q2
- [ ] Q3
`);
  }
});
console.log('Squad files generated successfully.');
