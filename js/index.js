// * Varabiles
let menu = document.querySelector(".header .menu");
let nav_links = document.querySelector(".header .links");
let change_mode_btn = document.querySelector(".header .dark-light-btn");
let root = document.querySelector(":root");

// * Script
menu.addEventListener("click", function () {
  this.classList.toggle("open-wind");
  nav_links.classList.toggle("open");
});

[...nav_links.children].forEach((link) => {
  link.addEventListener("click", function () {
    link.parentElement.classList.remove("open");
    menu.classList.remove("open-wind");
  });
});

change_mode_btn.addEventListener("click", function () {
  this.classList.toggle("dark");

  if (this.classList.contains("dark")) {
    localStorage.setItem("web-mode", "dark");
    root.style.setProperty("--bg-color", "#050519");
    root.style.setProperty("--bg-section-color", "#282c34");
    root.style.setProperty("--txt-primary-color", "#fff");
    root.style.setProperty("--txt-secondary-color", "rgba(255,255,255,0.74)");
    root.style.setProperty("--bg-title-section", "#282c34");
    root.style.setProperty("--box-shadow-color", "rgba(38, 38, 38, 0.13)");
    root.style.setProperty("--tool-line-color", "#6f7279");
  } else {
    localStorage.setItem("web-mode", "light");
    root.style.setProperty("--bg-color", "#fff");
    root.style.setProperty("--bg-section-color", "#f4f6fb");
    root.style.setProperty("--txt-primary-color", "#000");
    root.style.setProperty("--txt-secondary-color", "#2c2c2e");
    root.style.setProperty("--bg-title-section", "#f2f2f7");
    root.style.setProperty("--box-shadow-color", "rgba(38, 38, 38, 0.04)");
    root.style.setProperty("--tool-line-color", "#dedede");
  }
});

if (localStorage.getItem("web-mode") === "dark") {
  change_mode_btn.classList.add("dark");
  root.style.setProperty("--bg-color", "#050519");
  root.style.setProperty("--bg-section-color", "#282c34");
  root.style.setProperty("--txt-primary-color", "#fff");
  root.style.setProperty("--txt-secondary-color", "rgba(255,255,255,0.74)");
  root.style.setProperty("--bg-title-section", "#282c34");
  root.style.setProperty("--box-shadow-color", "rgba(38, 38, 38, 0.13)");
  root.style.setProperty("--tool-line-color", "#6f7279");
} else {
  change_mode_btn.classList.remove("dark");
  root.style.setProperty("--bg-color", "#fff");
  root.style.setProperty("--bg-section-color", "#f4f6fb");
  root.style.setProperty("--txt-primary-color", "#000");
  root.style.setProperty("--txt-secondary-color", "#2c2c2e");
  root.style.setProperty("--bg-title-section", "#f2f2f7");
  root.style.setProperty("--box-shadow-color", "rgba(38, 38, 38, 0.04)");
  root.style.setProperty("--tool-line-color", "#dedede");
}

let work_tools = [
  {
    iamges: ["images/logo_figma.png"],
    title: "website design",
    description:
      "We create visually stunning, user-friendly websites that represent your brand and captivate your audience. Our designs ensure a seamless user experience, boosting engagement and conversions.",
  },
  {
    iamges: ["images/seo.png"],
    title: "SEO",
    description:
      "Our SEO services boost your website’s visibility, driving organic traffic and increasing your online presence through keyword optimization, quality content, and technical SEO.",
  },
  {
    iamges: ["images/targeted.png"],
    title: "digital marketing",
    description:
      "We craft tailored digital marketing strategies to reach your target audience effectively. From social media management to designing social media pages, we enhance your brand’s online presence and drive growth.",
  },
  {
    iamges: ["images/photoshop.png", "images/illustrator.png"],
    title: "logo design",
    description:
      "We create unique and memorable logos that reflect your brand’s identity and values, helping you stand out in a crowded market.",
  },
  {
    iamges: ["images/social-media.png"],
    title: "Professional Social Media Page Setup",
    description:
      "We set up professional social media pages tailored to your brand’s needs, ensuring a strong and cohesive online presence across all platforms.",
  },
  {
    iamges: ["images/data.png"],
    title: "Computer Software and Mobile App Development",
    description:
      "Our team creates tailored software and mobile apps to solve your business problems. We offer innovative solutions that boost efficiency and improve user satisfaction",
  },
];

let work_boxes = document.querySelector(".service-content .service-boxes");

work_tools.forEach((tool) => {
  const toolDom = document.createElement("div");
  toolDom.className = "tool";
  const tool_images = document.createElement("div");
  tool_images.className = "tool-images";
  tool.iamges.forEach((img, index) => {
    const imgDom = document.createElement("div");
    imgDom.className = `tool-img tool-img-${index + 1}`;
    const imgDom_img = document.createElement("img");
    imgDom_img.src = img;
    imgDom_img.alt = `tool-img-${index + 1}`;
    imgDom.appendChild(imgDom_img);
    tool_images.appendChild(imgDom);
  });
  const tool_title = document.createElement("h4");
  tool_title.className = "tool-title";
  const tool_title_txt = document.createTextNode(tool.title);
  tool_title.appendChild(tool_title_txt);
  const tool_description = document.createElement("p");
  tool_description.className = "tool-description";
  const tool_description_txt = document.createTextNode(tool.description);
  tool_description.appendChild(tool_description_txt);

  toolDom.appendChild(tool_images);
  toolDom.appendChild(tool_title);
  toolDom.appendChild(tool_description);

  work_boxes.appendChild(toolDom);
});
