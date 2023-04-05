### INSTALL DEPENDENCIES
```
npm install
```

### RUN SERVER
```
npm run dev
```
### RUN PRISMA MIGRATIONS
```
npx prisma migrate dev --name init
```

# CONVENTIONAL COMMITS

---

### feat:

Indica o desenvolvimento de uma nova feature ao projeto.\
Exemplo: Acréscimo de um serviço, funcionalidade, endpoint, etc.\
<span style="color:green">feat: <span/><span style="color:green">add user login."<span/>

### refac:

Usado quando houver uma refatoração de código que não tenha qualquer tipo de impacto na lógica/regras de negócio do sistema.\
Exemplo: Mudanças de código após um code review\
<span style="color:green">refac: change log pattern."<span/>

### style:

Empregado quando há mudanças de formatação e estilo do código que não alteram o sistema de nenhuma forma.\
Exemplo: Mudar o style-guide, mudar de convenção lint, arrumar indentações, remover espaços em brancos, remover comentários, etc..\
<span style="color:green">style: remove double spaces."<span/>

### fix:

Utilizado quando há correção de erros que estão gerando bugs no sistema.\
Exemplo: Aplicar tratativa para uma função que não está tendo o comportamento esperado e retornando erro.\
<span style="color:green">fix: remove getPaymant() wrong attribute."<span/>

### docs:

Usado quando há mudanças na documentação do projeto.\
Exemplo: adicionar informações na documentação da API, mudar o README, etc.\
<span style="color:green">docs: add dependencies install instructions."<span/>

### build:

Utilizada para indicar mudanças que afetam o processo de build do projeto ou dependências externas.\
Exemplo: Gulp, adicionar/remover dependências do npm, etc.\
<span style="color:green">build: install react-router-dom."<span/>
