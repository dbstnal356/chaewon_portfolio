$(function () { 

   // Custom Cursor
       const cursor = document.querySelector('.custom-cursor'); 
let mouseX = 0, mouseY = 0;   // 실제 마우스 위치
let cursorX = 0, cursorY = 0; // 커서(div) 위치

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; // 마우스 X 좌표
    mouseY = e.clientY; // 마우스 Y 좌표
    /* 사용자가 마우스를 움직일 때마다 **목표 좌표(A)**를 갱신.

clientX/Y는 뷰포트(화면) 기준 좌표. */
});

function animateCursor() {
    // 마우스 위치와 커서 위치의 차이를 10%만 이동 → 부드럽게 따라옴
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    /* (mouseX - cursorX) * 0.1 = LERP(선형 보간).
“차이의 10%만큼” 이동 → 지연감을 가진 ‘스르륵’ 효과.

0.1을 크게 하면 더 빨리 따라오고, 작게 하면 더 느리게 따라와요. */

    // 커서 div 위치 갱신
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor); // 다음 프레임에서도 계속 실행
}
animateCursor();

        // Cursor Trail Effect
       document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');  // 새로운 div 생성
    trail.className = 'cursor-trail';             // CSS 스타일 적용
    trail.style.left = e.clientX + 'px';          // 위치 = 마우스 좌표
    trail.style.top = e.clientY + 'px';
    document.body.appendChild(trail);             // body에 추가

    // 아주 살짝 늦게 opacity/scale을 1로 → 나타나는 애니메이션
    setTimeout(() => {
        trail.style.opacity = '1';
        trail.style.transform = 'scale(1)';
    }, 10);

    // 0.3초 뒤 opacity/scale을 0으로 → 사라지는 애니메이션
    setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(0)';
    }, 300);

    // 0.6초 뒤 DOM에서 제거 → 메모리 낭비 방지
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