export default class Randomizer {
    
    shuffle(array){
        
        for (let i = 0; i < 13; i++) {
           
            for (let i = array.length - 1; i >= 0; i--) {
                const randomIndex = Math.floor(Math.random() * (i + 1));
                array.push(array[randomIndex]);
                array.splice(randomIndex, 1);
            }
            
        }

        return array;
    }

}
