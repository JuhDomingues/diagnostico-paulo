const questions = [
            // Parte 1: Clareza de Identidade Profissional
            {
                step: 1,
                stepTitle: "Parte 1: Clareza de Identidade Profissional",
                text: "Quando você precisa se apresentar profissionalmente, você:",
                variableName: "apresentacao-profissional",
                options: [
                    { text: "Enrola, fala muito e não consegue resumir.", value: "A" },
                    { text: "Fala o que faz, mas sente que não impressiona.", value: "B" },
                    { text: "Tem uma apresentação clara e impactante, que gera interesse na hora.", value: "C" }
                ]
            },
            {
                step: 1,
                stepTitle: "Parte 1: Clareza de Identidade Profissional",
                text: "Seu público ideal:",
                variableName: "publico-ideal",
                options: [
                    { text: "Ainda é confuso ou muito genérico.", value: "A" },
                    { text: "É mais ou menos definido, mas falta foco.", value: "B" },
                    { text: "É bem claro e presente na sua comunicação.", value: "C" }
                ]
            },
            {
                step: 1,
                stepTitle: "Parte 1: Clareza de Identidade Profissional",
                text: "O diferencial do seu trabalho:",
                variableName: "diferencial-trabalho",
                options: [
                    { text: "É difícil de explicar ou você nunca parou pra pensar nisso.", value: "A" },
                    { text: "Você até sabe, mas não sabe como mostrar.", value: "B" },
                    { text: "Está bem visível e é reconhecido por quem te acompanha.", value: "C" }
                ]
            },
            // Parte 2: Presença no Instagram
            {
                step: 2,
                stepTitle: "Parte 2: Presença Estratégica no Instagram",
                text: "Sua bio no Instagram:",
                variableName: "bio-instagram",
                options: [
                    { text: "Está desatualizada ou sem clareza.", value: "A" },
                    { text: "Tem boas informações, mas não é estratégica.", value: "B" },
                    { text: "Posiciona bem o que você faz e atrai curiosos.", value: "C" }
                ]
            },
            {
                step: 2,
                stepTitle: "Parte 2: Presença Estratégica no Instagram",
                text: "Você posta com:",
                variableName: "frequencia-postagem",
                options: [
                    { text: "Insegurança e muita dúvida do que funciona.", value: "A" },
                    { text: "Alguma frequência, mas sem estratégia clara.", value: "B" },
                    { text: "Intenção, clareza de propósito e com bons resultados.", value: "C" }
                ]
            },
            {
                step: 2,
                stepTitle: "Parte 2: Presença Estratégica no Instagram",
                text: "Quando alguém entra no seu perfil:",
                variableName: "impressao-perfil",
                options: [
                    { text: "Não entende o que você faz ou acha comum.", value: "A" },
                    { text: "Gosta do que vê, mas ainda não se convence.", value: "B" },
                    { text: "Percebe valor, entende sua proposta e considera te contratar.", value: "C" }
                ]
            },
            // Parte 3: Postura e Percepção de Autoridade
            {
                step: 3,
                stepTitle: "Parte 3: Postura de Autoridade Percebida",
                text: "O que você sente ao gravar um vídeo:",
                variableName: "gravar-video",
                options: [
                    { text: "Vergonha, trava ou procrastina.", value: "A" },
                    { text: "Até grava, mas não gosta muito do resultado.", value: "B" },
                    { text: "Grava com naturalidade, e as pessoas engajam.", value: "C" }
                ]
            },
            {
                step: 3,
                stepTitle: "Parte 3: Postura de Autoridade Percebida",
                text: "Em relação aos seus concorrentes:",
                variableName: "comparacao-concorrentes",
                options: [
                    { text: "Parece que todo mundo aparece mais que você.", value: "A" },
                    { text: "Você se compara, mas sabe que tem potencial.", value: "B" },
                    { text: "Sabe que seu valor é diferente e já se sente referência.", value: "C" }
                ]
            },
            {
                step: 3,
                stepTitle: "Parte 3: Postura de Autoridade Percebida",
                text: "Suas redes sociais estão:",
                variableName: "organizacao-redes",
                options: [
                    { text: "Largadas ou amadoras.", value: "A" },
                    { text: "Com algum esforço, mas ainda não transmitem autoridade.", value: "B" },
                    { text: "Organizadas, com imagem, conteúdo e presença coerente com o seu valor.", value: "C" }
                ]
            }
        ];

        const archetypes = {
            "MAIORIA_A": {
                icon: "🔎",
                title: "O Invisível Valioso",
                className: "invisivel-valioso",
                description: "Você tem valor. Mas ele está escondido.<br><br>A sua comunicação não reflete quem você é. As pessoas não entendem seu trabalho, sua bio confunde, seu feed não mostra sua potência. E isso dói — porque você sabe que merece mais do que está recebendo.",
                tip: "💡 Dica Estratégica:",
                tipContent: "Comece pelo essencial: atualize sua bio com clareza do que você faz, para quem e com qual diferencial. Grave um vídeo simples contando por que você escolheu sua profissão. Isso já inicia sua virada.",
                cta: "🎯 Quer transformar essa virada em estratégia real?<br>Agende sua sessão individual e vamos juntos estruturar seu posicionamento de autoridade no Instagram."
            },
            "MAIORIA_B": {
                icon: "🟡",
                title: "O Potencial em Evolução",
                className: "potencial-evolucao",
                description: "Você está no caminho certo… mas ainda está sendo visto como \"mais um\".<br><br>Sua comunicação tem valor, mas falta consistência. Falta coragem. Falta estrutura. Você já impacta pessoas, mas ainda não gera o respeito e o desejo que merecia.",
                tip: "💡 Dica Estratégica:",
                tipContent: "Organize um plano de conteúdo onde 1x por semana você grave um vídeo mostrando sua opinião, seu método ou um case. Posicionamento exige frequência, clareza e coragem.",
                cta: "🎯 Quer acelerar esse processo e virar referência no seu nicho?<br>Na sessão individual vamos montar um plano profissional de posicionamento — que transforma seguidores em clientes certos."
            },
            "MAIORIA_C": {
                icon: "🟢",
                title: "A Autoridade em Ascensão",
                className: "autoridade-ascensao",
                description: "Você já tem uma presença que inspira. O mercado te percebe. Mas agora é hora de escalar.<br><br>Você pode — e deve — subir o nível. Autoridade se constrói todos os dias. E quem quer vender mais com menos esforço, precisa ser percebido como uma escolha natural.",
                tip: "💡 Dica Estratégica:",
                tipContent: "Invista em sua imagem digital como uma marca de valor. Profissionalize seus vídeos, melhore os destaques, posicione sua oferta com clareza. Seu próximo salto está na sofisticação do que já funciona.",
                cta: ""
            }
        };

        let currentQuestion = 0;
        let answers = [];
        let userData = {};

        function startDiagnostic() {
            document.getElementById('landing').style.display = 'none';
            document.getElementById('leadCapture').style.display = 'block';
        }

        function startQuestions() {
            document.getElementById('preDiagnostic').style.display = 'none';
            document.getElementById('diagnostic').style.display = 'block';
            showQuestion(currentQuestion);
        }

        async function submitLeadForm() {
            const form = document.getElementById('leadForm');
            const formData = new FormData(form);

            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const instagram = formData.get('instagram');
            const profession = formData.get('profession');
            const revenue = formData.get('revenue');

            if (!name || !email || !phone || !instagram || !profession || !revenue) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            const emailRegex = /^["\w\.-]+@["\w\.-]+\.\w+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }

            userData = {
                name: name,
                email: email,
                phone: phone,
                instagram: instagram,
                profession: profession,
                revenue: revenue
            };

            // Show pre-diagnostic page
            document.getElementById('leadCapture').style.display = 'none';
            document.getElementById('preDiagnostic').style.display = 'block';
        }

        // Initialize form event listener when page loads
        document.addEventListener('DOMContentLoaded', function() {
            // Lead form submission - keeping this as backup
            document.getElementById('leadForm').addEventListener('submit', function(e) {
                e.preventDefault();
                submitLeadForm();
            });
        });

        function showQuestion(index) {
            const question = questions[index];
            const stepTitle = document.getElementById('stepTitle');
            const questionText = document.getElementById('questionText');
            const optionsContainer = document.getElementById('optionsContainer');
            const questionCounter = document.getElementById('questionCounter');
            const progressFill = document.getElementById('progressFill');

            stepTitle.textContent = question.stepTitle;
            questionText.textContent = question.text;
            questionCounter.textContent = `Pergunta ${index + 1} de ${questions.length}`;
            progressFill.style.width = `${((index + 1) / questions.length) * 100}%`;

            optionsContainer.innerHTML = '';
            question.options.forEach((option, optionIndex) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option.text;
                optionElement.onclick = () => selectOption(index, optionIndex, option.value);
                optionsContainer.appendChild(optionElement);
            });

            updateNavigationButtons();
        }

        function selectOption(questionIndex, optionIndex, value) {
            const options = document.querySelectorAll('.option');
            options.forEach(opt => opt.classList.remove('selected'));
            options[optionIndex].classList.add('selected');

            answers[questionIndex] = value;
            // Store the answer with its variable name in userData
            const question = questions[questionIndex];
            if (question.variableName) {
                userData[question.variableName] = value;
            }
            updateNavigationButtons();
        }

        function updateNavigationButtons() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            prevBtn.disabled = currentQuestion === 0;
            
            if (currentQuestion === questions.length - 1) {
                nextBtn.textContent = 'Ver Resultado';
                nextBtn.disabled = answers[currentQuestion] === undefined;
            } else {
                nextBtn.textContent = 'Próxima';
                nextBtn.disabled = answers[currentQuestion] === undefined;
            }
        }

        function nextQuestion() {
            if (currentQuestion === questions.length - 1) {
                showResult();
            } else {
                currentQuestion++;
                showQuestion(currentQuestion);
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                showQuestion(currentQuestion);
            }
        }

        async function showResult() {
            // Count answers by type
            const countA = answers.filter(answer => answer === 'A').length;
            const countB = answers.filter(answer => answer === 'B').length;
            const countC = answers.filter(answer => answer === 'C').length;

            // Determine the majority result
            let archetypeKey;
            if (countA >= countB && countA >= countC) {
                archetypeKey = "MAIORIA_A";
            } else if (countB >= countA && countB >= countC) {
                archetypeKey = "MAIORIA_B";
            } else {
                archetypeKey = "MAIORIA_C";
            }

            const archetype = archetypes[archetypeKey];

            document.getElementById('diagnostic').style.display = 'none';
            document.getElementById('result').style.display = 'block';

            // Update userData with diagnostic results
            userData.countA = countA;
            userData.countB = countB;
            userData.countC = countC;
            userData.archetypeKey = archetypeKey;
            userData.archetypeTitle = archetype.title;
            userData.archetypeDescription = archetype.description;

            // Store all answers with their variable names
            questions.forEach((question, index) => {
                if (question.variableName) {
                    userData[question.variableName] = answers[index];
                }
            });

            document.getElementById('resultIcon').textContent = archetype.icon;
            document.getElementById('resultTitle').innerHTML = `${userData.name ? userData.name + ', seu posicionamento é' : 'Seu posicionamento é'}<br>${archetype.title}`;
            document.getElementById('resultDescription').innerHTML = archetype.description;

            // Apply color theme to result content
            const resultContent = document.getElementById('resultContent');
            resultContent.className = `result-content ${archetype.className}`;

            // Update strategic tip section
            const needsElement = document.getElementById('resultNeeds');
            const insightBlock = document.getElementById('resultInsight');

            if (archetype.tipContent) {
                needsElement.innerHTML = `<h4 style="margin-bottom: 15px;">${archetype.tip}</h4><p>${archetype.tipContent}</p>${archetype.cta ? '<br><br><p>' + archetype.cta + '</p>' : ''}`;
                insightBlock.style.display = 'block';
            } else {
                insightBlock.style.display = 'none';
            }

            // Send updated userData to webhook after diagnostic completion
            console.log('Sending userData to webhook:', userData);
            try {
                const response = await fetch('https://hook.us2.make.com/a5zhjhhcqysdashd5si96p3fj40y4dm1', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });

                if (!response.ok) {
                    throw new Error('Falha ao enviar os dados do diagnóstico. Tente novamente.');
                }

                console.log('Dados do diagnóstico enviados com sucesso! Status: ' + response.status);
                fbq('track', 'SubmitApplication');

            } catch (error) {
                console.error('Erro ao enviar dados do diagnóstico:', error);
            }
        }

        function purchaseCourse() {
            // Track purchase attempt
            console.log('Purchase attempt for user:', userData);

            // Track Facebook Pixel event
            if (typeof fbq !== 'undefined') {
                fbq('track', 'InitiateCheckout', {
                    content_name: 'Guia 12 Passos para Autoridade no Instagram',
                    value: 29.90,
                    currency: 'BRL'
                });
            }

            // Redirect to course sales page
            window.location.href = 'https://lp.autoridademaxima.com.br';
        }

        function requestPersonalizedSession() {
            alert('Obrigado pelo interesse! Em breve você será redirecionado para agendar sua sessão personalizada.');
        }
