$(function () { 

   // Custom Cursor
        const cursor = document.querySelector('.custom-cursor');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Cursor Trail Effect
        document.addEventListener('mousemove', (e) => {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            document.body.appendChild(trail);

            setTimeout(() => {
                trail.style.opacity = '1';
                trail.style.transform = 'scale(1)';
            }, 10);

            setTimeout(() => {
                trail.style.opacity = '0';
                trail.style.transform = 'scale(0)';
            }, 300);

            setTimeout(() => {
                trail.remove();
            }, 600);
        });

        // Background Grid Animation
        const bgAnimation = document.getElementById('bgAnimation');
        for (let i = 0; i < 10; i++) {
            const line = document.createElement('div');
            line.className = 'grid-line';
            line.style.width = '1px';
            line.style.height = '100%';
            line.style.left = (i * 10) + '%';
            line.style.animation = `pulse ${2 + Math.random() * 3}s infinite`;
            bgAnimation.appendChild(line);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { opacity: 0.1; }
                50% { opacity: 0.3; }
            }
        `;
        document.head.appendChild(style);

       

        // Email copy on click
        document.querySelectorAll('#info-copy').forEach(item => {
            item.addEventListener('click', function(e) {
                if (this.tagName !== 'A') {
                    const text = this.textContent;
                    navigator.clipboard.writeText(text).then(() => {
                        const original = this.textContent;
                        this.textContent = '복사 완료!';
                        setTimeout(() => {
                            this.textContent = original;
                        }, 1500);
                    });
                }
            });
        });

        // Project items click - 각 프로젝트별 링크 설정
        const projectLinks = {
            'OAK & ON': {
                url: 'https://your-oakandon-site.com',  // 실제 사이트 URL로 변경
                type: 'external'  // 새 탭에서 열기
            },
            'Health Tracker': {
                url: 'health-tracker-detail.html',  // 상세 페이지 파일명
                type: 'internal'  // 같은 탭에서 열기
            },
            'Admin Dashboard': {
                url: 'admin-dashboard-detail.html',  // 상세 페이지 파일명
                type: 'internal'
            }
        };

        document.querySelectorAll('.project-item').forEach(item => {
            item.addEventListener('click', function() {
                const titleElement = this.querySelector('.project-title');
                const titleText = titleElement.textContent.replace('→', '').trim();
                
                const projectData = projectLinks[titleText];
                
                if (projectData) {
                    if (projectData.type === 'external') {
                        // 외부 사이트는 새 탭에서 열기
                        window.open(projectData.url, '_blank');
                    } else {
                        // 내부 페이지는 같은 탭에서 열기
                        window.location.href = projectData.url;
                    }
                } else {
                    console.log('링크가 설정되지 않은 프로젝트:', titleText);
                }
            });
        });
});