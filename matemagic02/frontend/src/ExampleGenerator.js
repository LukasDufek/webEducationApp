export class ExampleGenerator {

    constructor() {

    }


//---------------------------------------------------------------------------
//--------------GNEREROVANI CVICENI PRO I.ROCNIK-----------------------------
//---------------------------------------------------------------------------



//pro 1.ROCNIK - generovani a priprava cviceni
    generate_examples_for_I(count_of_examples){
        let example = {};
        let examples = [];
        let count_achieved = false;

        while(examples.length < count_of_examples || !count_achieved){


            example = this.generate_addition_examples(1, 20, 1);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achieved = true;
                    break;
                }

            }

            example = this.generate_subtraction_examples(1, 20, 1);
            if (!this.exists_same_example(example, examples)) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achieved = true;
                    break;
                }

            }

            example = this.generate_compare_examples(1, 20);
            if (!this.exists_same_example(example, examples)) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achieved = true;
                    break;
                }

            }
        }


        return examples.sort(() => 0.5 - Math.random());


    }

//--------------------------------------------------------------------------
//--------------GNEREROVANI CVICENI PRO II.ROCNIK-----------------------------
//----------------------------------------------------------------------------



//pro 2.ROCNIK - generovani a priprava cviceni
    generate_examples_for_II(count_of_examples){
        let example = {};
        let examples = [];
        let count_achived = false;

        while(examples.length < count_of_examples || !count_achived){

            example = this.generate_multiplication_examples(1, 5, 2);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }


            }

            example = this.generate_round_examples(1, 100, 10, 2);

            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }


            }

            example = this.generate_addition_examples(20, 100, 2);

            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }


            }

            example = this.generate_subtraction_examples(20, 100, 2);

            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }


            }

        }

        return examples.sort(() => 0.5 - Math.random());

    }


//-----------------------------------------------------------------------------
//--------------GNEREROVANI CVICENI PRO III.ROCNIK-----------------------------
//-----------------------------------------------------------------------------

//pro 3.ROCNIK - generovani a priprava cviceni
    generate_examples_for_III(count_of_examples){

        let example = {};
        let examples = [];
        let count_achived = false;

        while(examples.length < count_of_examples || !count_achived){


            example = this.generate_round_examples(10, 1000, 10, 3);

            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }


            example = this.generate_round_examples(10, 1000, 100, 3);

            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }


            }

            example = this.generate_addition_examples(10, 100, 3);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }


            }

            example = this.generate_subtraction_examples(10 , 100, 3);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }


            }

            example = this.generate_multiplication_examples(2, 10, 3);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }


            }


            example = this.generate_division_examples(2, 100, 3);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }
        }

        return examples.sort(() => 0.5 - Math.random());

    }


//----------------------------------------------------------------------------
//--------------GNEREROVANI CVICENI PRO IV.ROCNIK-----------------------------
//----------------------------------------------------------------------------

//pro 4.ROCNIK - generovani a priprava cviceni
    generate_examples_for_IV(count_of_examples){

        let example = {};
        let examples = [];
        let count_achived = false;


        while(examples.length < count_of_examples || !count_achived){

            //cele tisice
            example = this.generate_round_examples(1000, 1000000, 10000, 4);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }
            }

            example = this.generate_round_examples(1000, 1000000, 1000, 4);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }


            example = this.generate_addition_examples(1000, 100000, 4);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }
            example = this.generate_subtraction_examples(1000, 100000, 4);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }
            example = this.generate_multiplication_examples(10, 100000, 4);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }
            example = this.generate_division_examples(10, 100000, 4);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }

            example = this.generate_division_remainder_examples(2, 100);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }

        }
        return examples.sort(() => 0.5 - Math.random());

    }


//--------------------------------------------------------------------------
//--------------GNEREROVANI CVICENI PRO V.ROCNIK-----------------------------
//----------------------------------------------------------------------------

//pro 5.ROCNIK - generovani a priprava cviceni

    generate_examples_for_V(count_of_examples){

        let example = {};
        let examples = [];
        let count_achived = false;


        while(examples.length < count_of_examples || !count_achived){

            example = this.generate_subtraction_examples(1, 100, 5);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }


            //this.generate_fraction_examples(2, 200);
            example = this.generate_roman_number_example_intToRoman(1,3000);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }
            example = this.generate_roman_number_example_romanToInt(1, 3000);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }
            example = this.generate_addtion_decimal_examples(10, 100);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }
            example = this.generate_subtraction_decimal_examples(10, 100);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }
            example = this.generate_multiplication_decimal_examples(10, 100);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }
            example = this.generate_division_decimal_examples(10, 100);
            if (!(this.exists_same_example(example, examples))) {
                examples.push(example);
                if(examples.length === count_of_examples){
                    count_achived = true;
                    break;
                }

            }
        }


        return examples.sort(() => 0.5 - Math.random());

    }


//-----------------------------------------------------------------------------------------------


    sort_examples(examples){

        /*
        let sorted_examples = [];


        for(let i=0; i<examples.length; i++){
            sorted_examples.push(examples[i].sort((a,b) => (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0)));
        }
         */
        return examples.sort((a,b) => (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0))

    }



//-----------------------------------------------------------------------------------------------



    generateNumber(minLimit, maxLimit){
        return Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);

    }


    /*
    ------------------------------------------------------------------
        METODY NA GENEROVANI PRIKLADU SPOLECNE PRO VSECHNY ROCNIKY
    ------------------------------------------------------------------
     */


    /**
     *
     * @param minLimit
     * @param maxLimit
     */
    generate_compare_examples(minLimit, maxLimit){
        let first_number = this.generateNumber(minLimit, maxLimit);
        let second_number = this.generateNumber(minLimit, maxLimit);
        let operator = ''; //nepovinne
        let your_result = '0';
        let message = 'Porovnej:';

        let type = 'compare';

        let result = this.comapre_number(first_number, second_number);
        let toText = first_number.toString()+' '+second_number.toString();

        let completed = false;

        return {message, type, toText, first_number, second_number, operator, result, your_result, completed};
    }


    comapre_number(first_number, second_number){

        if(first_number > second_number) {
            return '>';
        }else if(first_number < second_number) {
            return '<';
        }else{
            return '=';
        }

    }


    /**
     * generovani prikladu na scitani
     * @param minLimit - random cislo od
     * @param maxLimit random cislo do
     * @param year rocnik pro jaky je priklad generovan
     */
    generate_addition_examples(minLimit, maxLimit, year) {


        let first_number = this.generateNumber(minLimit, maxLimit);
        let second_number = this.generateNumber(minLimit, maxLimit);
        let example = {};


        if(parseInt(year) === 4){
            first_number = Math.round((Math.random() * (maxLimit - minLimit + 1)) / minLimit) * minLimit ;
            second_number = Math.round((Math.random() * (maxLimit - minLimit + 1)) / minLimit) * minLimit ;
        }
        else if(parseInt(year)===5){
            first_number *= 1000000;
            second_number *= 1000000;
        }


        let operator = '+';
        let your_result = 0;
        let type = 'calculate';
        let message = 'Vypočítej:';

        let result = first_number + second_number;
        let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = '

        let completed = false;

        example = {message, type, toText, first_number, second_number, operator, result, your_result, completed};

        if( (year === 5) && (result > (maxLimit * 1000000)) ){
            return this.generate_addition_examples(minLimit, maxLimit, year);
        }else if(result > maxLimit){
            return this.generate_addition_examples(minLimit, maxLimit, year);
        }else if( ( ((first_number%10) + (second_number%10)) > 10) && ((year) < 3)){ //prehod pres desitku
            return this.generate_addition_examples(minLimit, maxLimit, year);
        }else {
            return example;
        }







    }


    /**
     * generovani prikladu na odcitani
     * @param minLimit - random cislo od
     * @param maxLimit random cislo do
     * @param year
     */

    generate_subtraction_examples(minLimit, maxLimit, year) {
        let first_number = this.generateNumber(minLimit, maxLimit);
        let second_number = this.generateNumber(minLimit, maxLimit);

        if(parseInt(year)=== 4){
            first_number = Math.round((Math.random() * (maxLimit - minLimit + 1)) / minLimit) * minLimit;
            second_number = Math.round((Math.random() * (maxLimit - minLimit + 1)) / minLimit) * minLimit ;
        }
        else if (parseInt(year) === 5){
            first_number *= 1000000;
            second_number *= 1000000;
        }

        let tmp;
        if(second_number > first_number){
            tmp=second_number;
            second_number = first_number;
            first_number = tmp;
        }

        let operator = '-';
        let your_result = 0;
        let message = 'Vypočítej:';
        let type = 'calculate';

        let result = first_number - second_number;
        let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = ';
        let completed = false;

        let example = {message, type, toText, first_number, second_number, operator, result, your_result, completed};
        //let example = {"message": message, "type":type, "toText":toText, "first_number":first_number, "second_number":second_number, "operator":operator, "result":result, "your_result":your_result};


         //prechod pres desitku
         if(((first_number%10) - (second_number%10) < 0) && (parseInt(year) < 3)){
            return this.generate_subtraction_examples(minLimit, maxLimit, year);
         }else{
             return example;
         }
    }

    /**
     * generovani prikladu na nasobeni
     * @param minLimit
     * @param maxLimit
     * @param year
     */
    generate_multiplication_examples(minLimit, maxLimit, year) {
        let first_number = this.generateNumber(minLimit, maxLimit);
        let second_number = this.generateNumber(minLimit, maxLimit);

        let nums = [100, 1000, 10000];

        if(parseInt(year) === 4){

            first_number = Math.floor((Math.random() * (1000 - 10 + 1)) + 10);
            second_number = nums[Math.floor(Math.random()*nums.length)];

        }else if(parseInt(year) === 5){
            //second_number (1-10)
            first_number *= nums[Math.floor(Math.random()*nums.length)];
            first_number /= 10;
        }

        let operator = '•';
        let your_result = 0;
        let message = 'Vypočítej:';
        let type = 'calculate';
        let result = first_number * second_number;
        let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = ';
        let completed = false;

        return {message, type, toText, first_number, second_number, operator, result, your_result, completed};

    }


    /**
     * generovani prikladu na deleni
     * @param minLimit
     * @param maxLimit
     * @param year
     */
    generate_division_examples(minLimit, maxLimit, year) {

        let first_number = this.generateNumber(minLimit, maxLimit);

        let second_number = Math.floor((Math.random() * (10 - minLimit + 1)) + minLimit);


        let nums = [100, 1000, 10000];

        if(parseInt(year) === 4){

            let rdn = nums[Math.floor(Math.random()*nums.length)];

            first_number = rdn * Math.floor((Math.random() * (100 - 10 + 1)) + 10);
            second_number = rdn;

        }else if(parseInt(year) === 5){

            if( (first_number / second_number) > 10 || (first_number % second_number !== 0) ){
               return this.generate_division_examples(minLimit, maxLimit);
            }

            first_number *= nums[Math.floor(Math.random()*nums.length)];
            first_number /= 10;


        }

        let operator = ':';
        let your_result = 0;
        let message = 'Vypočítej:';
        let type = 'calculate';
        let result = first_number / second_number;

        let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = ';
        let completed = false;
        let example = {message, type, toText, first_number, second_number, operator, result, your_result, completed}


        if( (first_number / second_number) > 10 ){
            return this.generate_division_examples(minLimit, maxLimit, year);
        }
        else if(first_number % second_number !==0 ){
            return this.generate_division_examples(minLimit, maxLimit, year);
        } else {
            return example;
        }

    }

    /**
     * generovani prikladu na zaokrouhlovani
     * @param minLimit
     * @param maxLimit
     * @param rounding_accuracy - na 100, 1000 atd.
     * @param year
     */
    generate_round_examples(minLimit, maxLimit, rounding_accuracy, year){
        let first_number;
        if(parseInt(year) === 5){
            //pro 5.rocnik, maxLimit = 100 - doporuceno
            //(Math.random() * (maxLimit - minLimit + 1) ) + minLimit)
            first_number = Math.round(( (Math.random() * maxLimit) + minLimit)*100)   /100;
        }else {
            first_number = this.generateNumber(minLimit, maxLimit);
        }

        let operator = '≐';
        let your_result = 0;
        let message = 'Zaokrouhli na:';
        let type = 'round';
        let second_number = rounding_accuracy;
        let result = Math.round(first_number / rounding_accuracy) * rounding_accuracy;

        let toText = first_number.toString()+' '+operator.toString()+' ';
        let completed = false;
        return {message, type, toText, first_number, operator, result, your_result, second_number, completed};

    }

    /*
    -----------------------------------------------------------
        METODY NA GENEROVANI PRIKLADU SPECIALNE PRO 4.ROCNIK
    -----------------------------------------------------------
     */
    generate_division_remainder_examples(minLimit, maxLimit) {

        let second_number = Math.floor((Math.random() * (10 - minLimit + 1)) + minLimit);
        maxLimit = second_number *10;

        let first_number = this.generateNumber(minLimit, maxLimit);


        let tmp;
        if(second_number > first_number){
            tmp=second_number;
            second_number = first_number;
            first_number = tmp;
        }

        let operator = ':';
        let your_result = 0;
        let your_remainder = 0;
        let message = 'Vypočítej:';
        let type = 'division_remainder';
        let result = Math.floor(first_number / second_number);
        let remainder = first_number % second_number;

        let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = ';
        let completed = false;
        return {message, type, toText, first_number, second_number, operator, result, your_result, remainder, your_remainder, completed}
    }


    /*
    -----------------------------------------------------------
        METODY NA GENEROVANI PRIKLADU SPECIALNE PRO 5.ROCNIK
    -----------------------------------------------------------
     */

    /**
     * generovani prikladu na rimska cisla - integer na rimske
     * @param minLimit
     * @param maxLimit
     */
    generate_roman_number_example_intToRoman(minLimit, maxLimit){
        //maxLimit = 3000
        let first_number = this.generateNumber(minLimit, maxLimit);


        let operator = '';
        let your_result = 0;
        let message = 'Převeď:';
        let type = 'roman_num';

        let result = this.convert_int_to_roman(first_number);
        let toText = first_number.toString()+' '+operator.toString()+' = ';
        let completed = false;
        return {message, type, toText, first_number, operator, result, your_result, completed}

    }

    /**
     * generovani prikladu na rimska cisla - rimske na integer
     * @param minLimit
     * @param maxLimit
     */
    generate_roman_number_example_romanToInt(minLimit, maxLimit){
        let result = this.generateNumber(minLimit, maxLimit);

        let operator = '';
        let your_result = 0;
        let message = 'Převeď:';
        let type = 'roman_num';

        let first_number = this.convert_int_to_roman(result);
        let toText = first_number.toString()+' '+operator.toString()+' = ';
        let completed = false;
        return {message, type, toText, first_number, operator, result, your_result, completed}

    }

    /**
     * Pomocna metoda
     * @param num
     * @returns {string|*}
     */
    convert_int_to_roman(num){
        let romanMatrix = [
            [1000, 'M'],
            [900, 'CM'],
            [500, 'D'],
            [400, 'CD'],
            [100, 'C'],
            [90, 'XC'],
            [50, 'L'],
            [40, 'XL'],
            [10, 'X'],
            [9, 'IX'],
            [5, 'V'],
            [4, 'IV'],
            [1, 'I']
        ];

        if (num === 0) {
            return '';
        }
        for (let i = 0; i < romanMatrix.length; i++) {
            if (num >= romanMatrix[i][0]) {
                return romanMatrix[i][1] + this.convert_int_to_roman(num - romanMatrix[i][0]);
            }
        }

    }


    /**
     * metoda na generovani prikladu se zlomky
     * zlomek max 20/20 z cisla max 200
     * @param minLimit
     * @param maxLimit
     */
    generate_fraction_examples(minLimit, maxLimit){

        let first_number = [];
        //citatel
        first_number [0]= Math.floor((Math.random() * ((maxLimit/20) - minLimit + 1)) + minLimit);
        //jmenovatel
        first_number [1]= Math.floor((Math.random() * ((maxLimit/20) - minLimit + 1)) + minLimit);
        //z pozadovaneho cisla
        let second_number = Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);


        let operator = 'z čísla';
        let your_result = 0;
        let message = 'Vypočítej:';
        let type = 'fraction';
        let result = Math.floor((second_number / first_number[1]) *first_number[0]);

        //let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = ';
        let example = {message, type, first_number, second_number, operator, result, your_result}

        if(second_number % first_number[1] !== 0) {
            this.generate_fraction_examples(minLimit, maxLimit);
        }else if(first_number[0] === first_number[1]){
            this.generate_fraction_examples(minLimit, maxLimit);
        }else {
            return example;
        }

    }

    /*
        GENROVANI PRIKLADU S DESETINÝMI CISLY
     */

    generate_addtion_decimal_examples(minLimit, maxLimit){

        let first_number = Math.floor(Math.random() * (minLimit * maxLimit - 1 * maxLimit) + 1 * maxLimit) / (maxLimit);
        let second_number = Math.floor(Math.random() * (minLimit * maxLimit - 1 * maxLimit) + 1 * maxLimit) / (maxLimit);

        let operator = '+';
        let your_result = -1.0;
        let type = 'decimal';
        let message = 'Vypočítej:';

        let result = first_number + second_number;
        result = Math.round(result * 100) / 100;
        let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = '
        let completed = false;
        return {message, type, toText, first_number, second_number, operator, result, your_result, completed};

    }


    generate_subtraction_decimal_examples(minLimit, maxLimit){

        let first_number = Math.floor(Math.random() * (minLimit * maxLimit - 1 * maxLimit) + 1 * maxLimit) / (maxLimit);
        let second_number = Math.floor(Math.random() * (minLimit * maxLimit - 1 * maxLimit) + 1 * maxLimit) / (maxLimit);

        let tmp;
        if(second_number > first_number){
            tmp=second_number;
            second_number = first_number;
            first_number = tmp;
        }

        let operator = '-';
        let your_result = -1.0;
        let type = 'decimal';
        let message = 'Vypočítej:';

        let result = first_number - second_number;
        result = Math.round(result * 100) / 100;
        let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = '
        let completed = false;
        return {message, type, toText, first_number, second_number, operator, result, your_result, completed};


    }

    generate_multiplication_decimal_examples(minLimit, maxLimit){

        let first_number = Math.floor(Math.random() * (minLimit * maxLimit - 1 * maxLimit) + 1 * maxLimit) / (maxLimit);

        let nums = [10, 100, 1000];

        let second_number = nums[Math.floor(Math.random()*nums.length)];

        let operator = '•';
        let your_result = -1.0;
        let type = 'decimal';
        let message = 'Vypočítej:';

        let result = first_number * second_number;
        result = Math.round(result * 100) / 100;
        let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = '
        let completed = false;
        return {message, type, toText, first_number, second_number, operator, result, your_result, completed};


    }


    generate_division_decimal_examples(minLimit, maxLimit){

        let first_number = Math.floor(Math.random() * (minLimit * maxLimit - 1 * maxLimit) + 1 * maxLimit) / (maxLimit);

        let nums = [10, 100, 1000];

        let second_number = nums[Math.floor(Math.random()*nums.length)];

        let operator = ':';
        let your_result = -1.0;
        let type = 'decimal';
        let message = 'Vypočítej:';

        let result = first_number / second_number;
        let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = '
        let completed = false;
        return {message, type, toText, first_number, second_number, operator, result, your_result, completed};



    }





    /**
     *
     * @param example
     * @param examples
     * @returns {boolean}
     */
    exists_same_example(example, examples){
        let exists = false;
        if(examples.length !== 0) {

            for (let i = 0; i < examples.length; i++) {
                if (example.type === 'calculate' || example.type === 'division_remainder' || example.type === 'fraction' || example.type === 'decimal') {
                    if (example.first_number === examples[i].first_number && example.second_number === examples[i].second_number &&
                        example.operator === examples[i].operator) {
                        exists = true;
                    }
                } else if (example.type === 'compare') {
                    if (example.first_number === examples[i].first_number && example.second_number === examples[i].second_number) {
                        exists = true;
                    }
                } else if (example.type === 'round') {
                    if (example.first_number === examples[i].first_number && example.second_number === examples[i].second_number) {
                        exists = true;
                    }
                } else if (example.type === 'roman_num') {
                    if (example.first_number === examples[i].first_number) {
                        exists = true;
                    }
                }
            }
        }

        return exists;
    }




}
