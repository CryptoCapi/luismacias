// Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });

        // Chatbot functionality
        let chatbotOpen = false;

        function toggleChatbot() {
            const window = document.getElementById('chatbotWindow');
            chatbotOpen = !chatbotOpen;
            window.style.display = chatbotOpen ? 'flex' : 'none';
        }

        function askQuestion(type) {
            const messages = document.getElementById('chatbotMessages');
            const options = document.getElementById('chatbotOptions');
            
            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'message user';
            
            let botResponse = '';
            
            switch(type) {
                case 'precios':
                    userMessage.textContent = 'Quiero saber los precios';
                    botResponse = '💰 Nuestros precios son:\n\n1 Persona:\n• 1 semana: $600\n• 4 semanas: $2,000\n\n2 Personas:\n• 1 semana: $900\n• 4 semanas: $3,000';
                    break;
                case 'horarios':
                    userMessage.textContent = 'Cuáles son los horarios?';
                    botResponse = '⏰ Los entrenamientos son:\n• 1 hora diaria\n• 5 días por semana\n• Lunes a Viernes\n• Horarios flexibles según tu disponibilidad';
                    break;
                case 'servicios':
                    userMessage.textContent = 'Qué incluye el entrenamiento?';
                    botResponse = '🏋️ El entrenamiento incluye:\n• Programa personalizado por objetivo\n• Explicación detallada de ejercicios\n• Corrección de técnica\n• Plan nutricional (servicio adicional)\n• Asesoría en suplementación (servicio adicional)';
                    break;
                case 'contacto':
                    userMessage.textContent = 'Cómo puedo contactarte?';
                    botResponse = '📞 Puedes contactar a Luis Macías:\n• Teléfono: 332 951 2916\n• Email: ja6774356@gmail.com\n\n¡Llama o escribe para agendar tu primera sesión!';
                    break;
                case 'ubicacion':
                    userMessage.textContent = 'Dónde se ubican?';
                    botResponse = '📍 Nos encontramos en:\n• Smart Fit León Campestre\n• León, Guanajuato\n\n¡Te esperamos para comenzar tu transformación!';
                    break;
            }
            
            messages.appendChild(userMessage);
            
            // Add bot response after delay
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.className = 'message bot';
                botMessage.style.whiteSpace = 'pre-line';
                botMessage.textContent = botResponse;
                messages.appendChild(botMessage);
                messages.scrollTop = messages.scrollHeight;
                
                // Show options again after response
                setTimeout(() => {
                    const backBtn = document.createElement('button');
                    backBtn.className = 'option-btn';
                    backBtn.textContent = '🔙 Volver al menú principal';
                    backBtn.onclick = () => {
                        options.innerHTML = `
                            <button class="option-btn" onclick="askQuestion('precios')">💰 Ver precios</button>
                            <button class="option-btn" onclick="askQuestion('horarios')">⏰ Horarios disponibles</button>
                            <button class="option-btn" onclick="askQuestion('servicios')">🏋️ Qué incluye</button>
                            <button class="option-btn" onclick="askQuestion('contacto')">📞 Información de contacto</button>
                            <button class="option-btn" onclick="askQuestion('ubicacion')">📍 Ubicación</button>
                        `;
                    };
                    options.innerHTML = '';
                    options.appendChild(backBtn);
                }, 1000);
            }, 1000);
            
            messages.scrollTop = messages.scrollHeight;
        }

        // Countdown timer
        function updateCountdown() {
            const now = new Date().getTime();
            const endOfMonth = new Date();
            endOfMonth.setMonth(endOfMonth.getMonth() + 1);
            endOfMonth.setDate(0);
            endOfMonth.setHours(23, 59, 59, 999);
            
            const distance = endOfMonth.getTime() - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
        }

        // Update countdown every minute
        setInterval(updateCountdown, 60000);
        updateCountdown(); // Initial call

        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover effects to cards
            const cards = document.querySelectorAll('.card-hover');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });