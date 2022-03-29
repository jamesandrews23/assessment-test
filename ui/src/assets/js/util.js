export default {
    getRangeForScore(data){
        let ranges = this.getRanges();

        data.forEach(num => {
            if(num <= 100 && num >= 90){
                ranges['100 - 90'] += 1;
            } else if(num <= 90 && num >= 80){
                ranges['90 - 80'] += 1;
            } else if(num <= 80 && num >= 70){
                ranges['80 - 70'] += 1;
            } else if(num <= 70 && num >= 60){
                ranges['70 - 80'] += 1;
            } else if(num <= 60 && num >= 50){
                ranges['60 - 50'] += 1;
            } else if(num <= 50 && num >= 40){
                ranges['50 - 40'] += 1;
            } else if(num <= 40 && num >= 30){
                ranges['40 - 30'] += 1;
            } else if(num <= 30 && num >= 20){
                ranges['30 - 20'] += 1;
            } else if(num <= 20 && num >= 10){
                ranges['20 - 10'] += 1;
            } else {
                ranges['10 - 0'] += 1;
            }
        });

        return ranges;
    },

    getRanges(){
        return {
            '100 - 90' : 0,
            '90 - 80' : 0,
            '80 - 70' : 0,
            '70 - 60' : 0,
            '60 - 50' : 0,
            '50 - 40' : 0,
            '40 - 30' : 0,
            '30 - 20' : 0,
            '20 - 10' : 0,
            '10 - 0' : 0
        }
    }
}
