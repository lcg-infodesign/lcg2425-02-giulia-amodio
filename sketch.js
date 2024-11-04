let colors = [ [255, 0, 0], [255, 255, 0], [0, 0, 255] ]; // Array di colori primari

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  angleMode(DEGREES); // Imposta il modo angolare su gradi
}

function draw() {
  background(140,203,255);
  let cols = 8; // Numero di colonne nella griglia
  let rows = 8; // Numero di righe nella griglia
  let gridSpacingX = width / (cols + 1); // Spaziatura orizzontale tra i glifi
  let gridSpacingY = height / (rows + 1); // Spaziatura verticale tra i glifi
  
  // Ciclo per creare una griglia di glifi ordinata
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      push();

      // Calcolo la posizione del glifo all'interno della griglia
      let posX = (i + 1) * gridSpacingX;
      let posY = (j + 1) * gridSpacingY;
      // Sposta il sistema di coordinate alla posizione calcolata
      translate(posX, posY);
      
      let Rotation = random([0, 90]); // Orientamento casuale del rettangolo
      rotate(Rotation);

      // Scegli un colore casuale dall'array di colori primari
      let chosenColor = random(colors);
      // Chiamo la funzione generateGlyph() per disegnare il glifo,
      // passando variazione, dimensione e colore scelto
      generateGlyph(i * 5 + j * 5, min(gridSpacingX, gridSpacingY) * 0.3, chosenColor); // Dimensione glifo basata su spazio griglia
      pop();
    }
  }
}

// Funzione per generare un singolo glifo
function generateGlyph(variation, baseSize, chosenColor) {
  
  // Numero casuale di rami per ogni glifo
  let numBranches = int(random(2, 4)); 

  // Disegno una forma centrale rettangolare con il colore scelto
  fill(chosenColor[0], chosenColor[1], chosenColor[2]);
  rectMode(CENTER); // Imposto il rettangolo in modo che il punto centrale coincida con l'origine
  rect(0, 0, baseSize, baseSize * 0.5); // Disegno un rettangolo centrale
  

  // Disegno rami che partono dai lati del rettangolo centrale
  stroke(0);
  for (let i = 0; i < numBranches; i++) {
    push();
    
    // Ruota ogni ramo con un angolo casuale
    let angle = random(360); 
    rotate(angle);
    
    // Lunghezza del ramo casuale
    let branchLength = baseSize * 0.4 + random(10, 20);
    line(baseSize / 2, 0, baseSize / 2 + branchLength, 0);

    // Aggiungi rettangoli piccoli alla fine di ogni ramo
    fill(0);
    rect(baseSize / 2 + branchLength, 0, 5, 5); // Rettangolo finale più piccolo
    pop();
  }
}

// Ridimensiona il canvas e ridisegna la griglia quando cambia la dimensione della finestra
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}

