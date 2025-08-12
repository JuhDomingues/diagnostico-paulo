const questions = [
            {
                step: 1,
                stepTitle: "Etapa 1: Propósito Profissional",
                text: "Quando penso no meu trabalho, meu foco principal é:",
                variableName: "foco-trabalho",
                options: [
                    { text: "Ter estabilidade, pagar as contas, crescer.", value: 1 },
                    { text: "Ser reconhecido pelo que eu faço, mostrar meu diferencial.", value: 2 },
                    { text: "Servir outras pessoas, deixar um impacto duradouro.", value: 3 }
                ]
            },
            {
                step: 1,
                stepTitle: "Etapa 1: Propósito Profissional",
                text: "Quando compartilho conteúdo ou falo do meu trabalho:",
                variableName: "falar-trabalho",
                options: [
                    { text: "Estou tentando conquistar mais clientes e melhorar minha renda.", value: 1 },
                    { text: "Quero mostrar que sou bom no que faço e mereço ser referência.", value: 2 },
                    { text: "Estou engajado em transformar vidas, inspirar ou provocar mudança.", value: 3 }
                ]
            },
            {
                step: 1,
                stepTitle: "Etapa 1: Propósito Profissional",
                text: "Meu maior objetivo com minha carreira hoje é:",
                variableName: "objetivo-carreira",
                options: [
                    { text: "Ter retorno financeiro mais rápido.", value: 1 },
                    { text: "Construir minha identidade profissional.", value: 2 },
                    { text: "Cumprir uma missão que vai além de mim.", value: 3 }
                ]
            },
            {
                step: 2,
                stepTitle: "Etapa 2: Influência no Mercado",
                text: "Meus clientes chegam até mim:",
                variableName: "captacao-clientes",
                options: [
                    { text: "Raramente. Quase sempre preciso correr atrás.", value: 1 },
                    { text: "Às vezes, via indicação ou porque me viram em algum conteúdo.", value: 2 },
                    { text: "Frequentemente. Já me procuram confiando no meu valor.", value: 3 }
                ]
            },
            {
                step: 2,
                stepTitle: "Etapa 2: Influência no Mercado",
                text: "Quando as pessoas veem meu perfil profissional:",
                variableName: "perfil-profissional",
                options: [
                    { text: "Sentem dúvida se eu sou confiável ou relevante.", value: 1 },
                    { text: "Acham bom, mas ainda não se conectam de forma clara.", value: 2 },
                    { text: "Me veem como autoridade e entendem meu diferencial.", value: 3 }
                ]
            },
            {
                step: 2,
                stepTitle: "Etapa 2: Influência no Mercado",
                text: "Me sinto percebido no meu mercado como:",
                variableName: "percepcao-mercado",
                options: [
                    { text: "Invisível ou comum.", value: 1 },
                    { text: "Um bom profissional, mas sem força de marca.", value: 2 },
                    { text: "Uma referência que gera respeito e desejo.", value: 3 }
                ]
            }
        ];

        const archetypes = {
            "TER-INVISÍVEL": {
                icon: "😓",
                title: "O Sobrevivente",
                className: "sobrevivente",
                description: "Você é bom no que faz… mas está <strong>preso no modo de sobrevivência.</strong><br><br>Seus dias giram em torno de pagar as contas, manter a cabeça fora da água e <strong>tentar ser notado num mercado lotado de promessas.</strong><br><br>E o pior: você sabe que <strong>tem potencial para mais</strong>, mas a realidade insiste em te puxar de volta para as urgências.",
                needs: "💥 Essa fase é dolorosa porque a gente sente que está ficando para trás. Você precisa urgentemente sair do anonimato e construir um posicionamento que o mercado leve a sério. Sozinho, isso é difícil — mas não impossível.",
                phrase: "Na sessão de direcionamento individual, vamos traçar seu plano de virada. É sua chance de parar de correr atrás e começar a ser procurado."
            },
            "TER-RELEVANTE": {
                icon: "😐",
                title: "O Técnico Esforçado",
                className: "tecnico",
                description: "Você entrega bem, é comprometido, e o cliente que vem… elogia. <strong>Mas ainda falta algo.</strong><br><br>Você sente que seu trabalho <strong>não tem o valor que merece.</strong> Está <strong>visível, mas não irresistível.</strong> Você até aparece, mas <strong>não impõe presença.</strong><br><br>E isso machuca — porque você sabe que <strong>entrega mais do que muitos que são mais escolhidos</strong> do que você.",
                needs: "🚨 Isso é um sinal claro de que o mercado ainda não te reconhece como autoridade. Está na hora de aprender a se posicionar como especialista, criar diferenciação emocional e virar referência no digital.",
                phrase: "Na sessão de direcionamento, você vai descobrir exatamente o que está travando sua autoridade e como ativar a influência que gera faturamento."
            },
            "TER-ESCOLHIDO": {
                icon: "💼",
                title: "O Autônomo Ambicioso",
                className: "autonomo",
                description: "<strong>Você está em ascensão.</strong> Já tem clientes, resultados e começa a colher frutos da sua dedicação.<br><br>Mas sabe que <strong>ainda não está no seu auge.</strong> Existe um novo nível — e ele exige <strong>presença, sofisticação e autoridade digital de verdade.</strong><br><br>Você quer <strong>crescer sem depender de indicação.</strong> Quer <strong>elevar seu ticket, criar uma marca forte</strong>, dominar o Instagram com posicionamento estratégico.",
                needs: "🔥 Esse é o momento de escalar, não de acomodar.",
                phrase: "Na sessão individual, vamos desenhar o plano para transformar sua presença em prestígio — e seus seguidores em compradores prontos."
            },
            "SER-INVISÍVEL": {
                icon: "🔍",
                title: "O Idealista Oculto",
                className: "invisivel",
                description: "Você sabe que <strong>tem algo especial.</strong> Que tem visão, diferencial, experiência. <strong>Mas parece que ninguém vê isso.</strong><br><br><strong>E dói.</strong> Dói sentir que está pronto, mas o mundo continua olhando para o lado.<br><br>Dói postar e não ser notado. Dói ver <strong>gente mais superficial ser escolhida no seu lugar.</strong>",
                needs: "💡 O mundo precisa conhecer a sua causa.",
                phrase: "Na sessão individual, vamos transformar sua identidade profissional em uma marca visível, desejada e respeitada."
            },
            "SER-RELEVANTE": {
                icon: "🚧",
                title: "Em Construção",
                className: "construcao",
                description: 'Você já começou a aparecer. O mercado está te notando. Mas ainda te vê como <strong>"uma das opções", e não como "a única escolha lógica".</strong><br><br>Isso <strong>cria insegurança:</strong> "Será que estou fazendo certo?", "Será que as pessoas me enxergam como eu realmente sou?"<br><br>Você está no <strong>meio da ponte entre reconhecimento e autoridade.</strong> E agora precisa <strong>ajustar sua imagem, mensagem e ritmo</strong> de conteúdo para cruzar de vez para o outro lado.',
                needs: "🔥 Não pare agora.",
                phrase: "Na sessão individual, vamos organizar os elementos da sua comunicação para que você não apenas apareça… mas permaneça na mente do seu público como referência."
            },
            "SER-ESCOLHIDO": {
                icon: "✨",
                title: "Referência Emergente",
                className: "emergente",
                description: "Você já tem força. <strong>Seu nome já causa impacto.</strong> Mas sabe que <strong>pode ir além.</strong><br><br>Você está em <strong>transição — de um bom profissional para um nome de peso.</strong> As pessoas te seguem, mas ainda <strong>não se transformam em comunidade.</strong> O mercado te escuta, mas ainda <strong>não te reverencia.</strong><br><br>É hora de <strong>consolidar seu legado, lançar sua metodologia, liderar com clareza</strong> e gerar desejo como autoridade máxima.",
                needs: "",
                phrase: "Na sessão de direcionamento, vamos estruturar o seu próximo salto — com identidade forte, presença estratégica e escalada consciente."
            },
            "SERVIR-INVISÍVEL": {
                icon: "💭",
                title: "O Idealista Oculto",
                className: "idealista",
                description: "Você tem um <strong>propósito forte.</strong> Sua motivação é linda. <strong>Mas ninguém vê isso.</strong><br><br>Você quer transformar vidas… mas o <strong>mercado ainda não entende quem você é.</strong><br><br>Esse é um dos <strong>perfis mais frustrantes</strong> — porque carrega valor, visão e verdade, mas <strong>não consegue comunicar isso com clareza.</strong> A consequência? <strong>Pouco engajamento, baixa procura, clientes errados.</strong>",
                needs: "💡 O mundo precisa conhecer a sua causa.",
                phrase: "Na sessão individual, vamos transformar sua visão em mensagem, sua intenção em influência e seu propósito em posicionamento que move pessoas."
            },
            "SERVIR-RELEVANTE": {
                icon: "🔄",
                title: "Líder em Evolução",
                className: "lider",
                description: "Você já inspira. Já toca pessoas. Seu conteúdo tem alma. Mas ainda sente que <strong>falta algo: previsibilidade, estrutura, vendas constantes.</strong><br><br>Você se doa… mas ainda <strong>não está sendo escolhido com consistência.</strong><br><br>O mercado te respeita, mas <strong>não te deseja como deveria.</strong>",
                needs: "🧩 É hora de alinhar o seu impacto com uma imagem forte, conteúdo irresistível e posicionamento que justifique o valor que você entrega.",
                phrase: "Na sessão individual, vamos ativar os pilares que faltam para você consolidar sua liderança no digital com propósito e faturamento."
            },
            "SERVIR-ESCOLHIDO": {
                icon: "👑",
                title: "Autoridade Máxima",
                className: "autoridade",
                description: "Você chegou num <strong>ponto onde poucos chegam:</strong> sua imagem inspira, seu trabalho impacta e as <strong>pessoas pagam pelo que você representa.</strong><br><br>Mas o topo também exige <strong>novos desafios:</strong> manter a consistência, expandir com propósito e formar novos líderes ao seu redor.<br><br>Você não pode parar. Você precisa estruturar o próximo ciclo: <strong>escala com legado.</strong>",
                needs: "",
                phrase: "A sessão individual será seu momento de alinhamento estratégico para crescer com consistência, autoridade e rentabilidade."
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
            document.getElementById('leadCapture').style.display = 'none';
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

            // Continue to the diagnostic questions
            startQuestions();
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
            const purposeScore = answers[0] + answers[1] + answers[2];
            const influenceScore = answers[3] + answers[4] + answers[5];

            let purposeLevel, influenceLevel;

            if (purposeScore >= 3 && purposeScore <= 4) purposeLevel = "TER";
            else if (purposeScore >= 5 && purposeScore <= 6) purposeLevel = "SER";
            else purposeLevel = "SERVIR";

            if (influenceScore >= 3 && influenceScore <= 4) influenceLevel = "INVISÍVEL";
            else if (influenceScore >= 5 && influenceScore <= 6) influenceLevel = "RELEVANTE";
            else influenceLevel = "ESCOLHIDO";

            const archetypeKey = `${purposeLevel}-${influenceLevel}`;
            const archetype = archetypes[archetypeKey];

            document.getElementById('diagnostic').style.display = 'none';
            document.getElementById('result').style.display = 'block';

            // Update userData with diagnostic results
            userData.purposeScore = purposeScore;
            userData.influenceScore = influenceScore;
            userData.archetypeKey = archetypeKey;
            userData.archetypeTitle = archetype.title;
            userData.archetypeDescription = archetype.description; // Also send description

            document.getElementById('resultIcon').textContent = archetype.icon;
            document.getElementById('resultTitle').innerHTML = `${userData.name ? userData.name + ', seu nível de influência é' : 'Seu nível de influência é'}<br>${archetype.title}`;
            document.getElementById('resultDescription').innerHTML = archetype.description;
            
            // Apply color theme to result content
            const resultContent = document.getElementById('resultContent');
            resultContent.className = `result-content ${archetype.className}`;
            
            // Update needs section if there's content
            const needsElement = document.getElementById('resultNeeds');
            const insightBlock = document.getElementById('resultInsight');
            
            if (archetype.needs) {
                needsElement.innerHTML = archetype.needs;
                insightBlock.style.display = 'block';
            } else {
                insightBlock.style.display = 'none';
            }

            // Send updated userData to webhook after diagnostic completion
            console.log('Sending userData to webhook:', userData); // Added for debugging
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
                fbq('track', 'SubmitApplication'); // Facebook Pixel event

            } catch (error) {
                console.error('Erro ao enviar dados do diagnóstico:', error);
                // Optionally, alert the user or log the error more prominently
            }
        }

        function purchaseConsultancy() {
            // Here you would integrate with your payment processor
            // For now, we'll show an alert and log the user data for the purchase
            
            console.log('Purchase attempt for user:', userData);
            
            // You could redirect to a payment page or open a payment modal
            window.location.href = 'https://payfast.greenn.com.br/130825/offer/gYo4jP';
        }

        function requestPersonalizedSession() {
            alert('Obrigado pelo interesse! Em breve você será redirecionado para agendar sua sessão personalizada.');
        }
