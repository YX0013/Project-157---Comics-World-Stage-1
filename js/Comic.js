AFRAME.registerComponent("comics-posters", {
    init: function () {
      this.postersContainer = this.el;
      this.createPoster();
    },
  
    createPoster: function () {
      const thumbNailsRef = [
        {
          id: "batman-forever",
          title: "Batman Forever",
          url: "./assets/thumbnails/Batman-Forever.jpeg",
        },
        {
          id: "strange-academy",
          title: "Strange Academy: Amazing Spider-Man",
          url: "./assets/thumbnails/Strange-Academy.jpeg",
        },
  
        {
          id: "transformers",
          title: "Transformers (2023)",
          url: "./assets/thumbnails/Transformers.jpeg",
        },
        {
          id: "wonder-woman",
          title: "Wonder Woman and Justice League America",
          url: "./assets/thumbnails/Wonder-Woman.jpeg",
        },
      ];
      let previousXPosition = -88;
      let previousXPosition2 = 4.5;
  
      for (var item of thumbNailsRef) {
        const posX = previousXPosition + 35;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        previousXPosition = posX;

        const posX2 = previousXPosition2 - 1.75;
        const position2 = { x: posX2, y: 0, z: 2 }
        previousXPosition2 = posX2;
        
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        // Thumbnail Element
        const thumbnail = this.createThumbnail(position2, item);
  
        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        
        borderEl.appendChild(thumbnail);
        borderEl.appendChild(titleEl);
        
        this.postersContainer.appendChild(borderEl);
      }
    },
    createThumbnail: function(position, item) {
      const entityEl = document.createElement("a-entity"); 
      entityEl.setAttribute("visible", true); 
      entityEl.setAttribute("geometry", { primitive: "plane", width: 18.5, height: 26 }); 
      entityEl.setAttribute("material", { src: item.url }); 
      entityEl.setAttribute("position", position);
      return entityEl;
    },
    createBorder: function(position, id) {
      const entityEl = document.createElement("a-entity"); 
      entityEl.setAttribute("visible", true); 
      entityEl.setAttribute("geometry", { primitive: "plane", width: 23, height: 30 }); 
      entityEl.setAttribute("material", { color: "#0077CC", opacity: 1 }); 
      entityEl.setAttribute("position", position);
      return entityEl;
    },
    createTitleEl: function(position, item) {
      const entityEl = document.createElement("a-entity"); 
      entityEl.setAttribute("text", {font: "exo2bold", align: "center", width: 70, color: "#e65100", value: item.title});
      const elPosition = position;
      elPosition.y = -25;
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("position", elPosition);
      return entityEl;
    }
  });
  