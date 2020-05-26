class Meal{
    constructor(id,categoryId,title,affordability,complexity,imgUrl,duration,ingridents,steps,isGlutenFree,isVegan,isVegiterian,isLactoseFree){
        this.id=id;
        this.categoryId=categoryId;
        this.title=title;
        this.affordability=affordability;
        this.complexity=complexity;
        this.imgUrl=imgUrl;
        this.duration=duration;
        this.ingridents=ingridents;
        this.steps=steps;
        this.isGlutenFree=isGlutenFree;
        this.isVegan=isVegan;
        this.isVegiterian=isVegiterian;
        this.isLactoseFree=isLactoseFree;
    }
}
export default Meal;