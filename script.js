const tagsAll = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
    e.preventDefault();

    if(e.key === "Enter")
    {
        setTimeout( () => {
            e.target.value=""
        }, 10 );

        randomSelect();
    }
})

function createTags(input)
{
    const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

    tagsAll.innerHTML="";

    tags.forEach((tag) => {
        const tagAll = document.createElement("span");
        tagAll.classList.add("tag");
        tagAll.innerText = tag;
        tagsAll.appendChild(tagAll);
    });
}

function randomSelect(){
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        if (randomTag !== undefined) {
            SelectTag(randomTag);
      
            setTimeout(() => {
              unSelectTag(randomTag);
            }, 100);
          }
        }, 100);
      
        setTimeout(() => {
          clearInterval(interval);
      
          setTimeout(() => {
            const randomTag = pickRandomTag();
      
            SelectTag(randomTag);
          }, 100);
        }, times * 100);
      }
      
      function pickRandomTag() {
        const tagsr = document.querySelectorAll(".tag");
        return tagsr[Math.floor(Math.random() * tagsr.length)];
      }
      
      function SelectTag(tag) {
        tag.classList.add("select");
      }
      
      function unSelectTag(tag) {
        tag.classList.remove("select");
      }