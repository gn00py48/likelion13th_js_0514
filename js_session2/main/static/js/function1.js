// ✅ JS 심화 실습 - 정돈된 버전

// -------------------------------
// 1. 상품 카드 출력 기능 (이미지 + 재고 상태)
// -------------------------------
const products = [
    { name: "사과", price: 1000, stock: 10, image: "/static/img/apple.jpg" },
    { name: "바나나", price: 500, stock: 0, image: "/static/img/banana.jpg" },
    { name: "딸기", price: 2500, stock: 5, image: "/static/img/strawberry.jpg" },
    { name: "망고", price: 3500, stock: 0, image: "/static/img/mango.jpg" },
    //💜 실습! 원하는 상품을 등록해 보세요 :)
];

const productList = document.getElementById("product-list");

products.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    if (item.stock === 0) {
        card.classList.add("out-of-stock");
    }
    // 카드 콘텐츠 구성
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="product-img" />
        <div class="card-content">
            <h3 class="product-name">${item.name}</h3>
            <p class="product-price">가격: ${item.price}원</p>
            <p class="product-stock">재고: ${item.stock === 0 ? "품절" : item.stock + "개"}</p>
        </div>
    `;

    productList.appendChild(card);
});


// -------------------------------
// 2. 댓글 작성 및 삭제 기능 (게시판 UI 스타일)
// -------------------------------
const commentInput = document.getElementById("comment-input");
const submitCommentBtn = document.getElementById("submit-comment");
const commentList = document.getElementById("comment-list");

submitCommentBtn.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (!commentText) return alert("댓글을 입력해주세요!");

    const commentDiv = document.createElement("div");
    commentDiv.className = "comment-card";
    commentDiv.innerHTML = `
        <p class="comment-content">${commentText}</p>
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.addEventListener("click", () => commentDiv.remove());

    commentDiv.appendChild(deleteBtn);
    commentList.appendChild(commentDiv);
    commentInput.value = "";
});


// -------------------------------
// 3. 좋아요 버튼 기능 (누를수록 증가 + 색상 변화)
// -------------------------------
const likeBtn = document.getElementById("like-btn");
let likeCount = 0;

likeBtn.addEventListener("click", () => {
    likeCount++;
    likeBtn.textContent = `❤️ ${likeCount}`;

    // 하트 색상 조건 변경
    if (likeCount >= 10) {
        likeBtn.classList.add("liked-threshold");
    } else {
        likeBtn.classList.remove("liked-threshold");
    }

    // 기본 하트 색상 변경 (짝수/홀수 기준)
    if (likeCount % 2 === 0) {
        likeBtn.style.color = "#f87171"; // 연한 빨강
    } else {
        likeBtn.style.color = "#facc15"; // 노랑 계열
    }
});


// -------------------------------
// 4. 게시판 작성 기능
// -------------------------------
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const writeBtn = document.getElementById("write-btn");
const board = document.getElementById("board");

writeBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) return alert("제목과 내용을 모두 입력하세요");

    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `<h4>${title}</h4><p>${content}</p>`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.addEventListener("click", () => post.remove());

    post.appendChild(deleteBtn);
    board.appendChild(post);

    titleInput.value = "";
    contentInput.value = "";
});
