function myCalFunction(){
    riskPerTrade  = '';
    calPrice  = '';
    exitPrice  = '';

    riskPerTrade = $('#riskPerTrade').val(); //c5
    calPrice = $('#calPrice').val(); //c7
    exitPrice = $('#exitPrice').val(); //c9

    if( (riskPerTrade.length > 0) && (calPrice.length > 0) && (exitPrice.length > 0) ){
        if( calPrice == exitPrice ){
            $('#buySellQuan').val(0);
            $('#riskPerShare').val( ((exitPrice - calPrice).toFixed(1)) );
            riskPerShare = $('#riskPerShare').val();

            $('#riskToRewardTarget').val( ((calPrice - riskPerShare).toFixed(1)) );

            $('#riskToRewardTarget2').val( ((calPrice - (riskPerShare*2)).toFixed(1)) );
            $('#riskToRewardTarget3').val( ((calPrice - (riskPerShare*3)).toFixed(1)) );

        }else if( calPrice > exitPrice ){

            $('#riskPerShare').val( ((calPrice - exitPrice).toFixed(1)) );
            riskPerShare = $('#riskPerShare').val();

            $('#buySellQuan').val( Number(( (riskPerTrade)/riskPerShare ).toFixed(0)) );
            $('#riskToRewardTarget').val( 
                (
                    (
                        parseFloat(calPrice) + parseFloat(riskPerShare)
                    ).toFixed(1) 
                ) 
            );


            $('#riskToRewardTarget2').val( (parseFloat(calPrice) + (riskPerShare*2)).toFixed(1) );
            $('#riskToRewardTarget3').val( (parseFloat(calPrice) + (riskPerShare*3)).toFixed(1) );

        }else{
            $('#riskPerShare').val( ((exitPrice - calPrice).toFixed(1)) );
            riskPerShare = $('#riskPerShare').val();

            $('#buySellQuan').val( Number(( (riskPerTrade)/riskPerShare ).toFixed(0)) );
            $('#riskToRewardTarget').val( ((calPrice - riskPerShare).toFixed(1)) );
            $('#riskToRewardTarget2').val( ((calPrice - (riskPerShare*2)).toFixed(1)) );
            $('#riskToRewardTarget3').val( ((calPrice - (riskPerShare*3)).toFixed(1)) );
        }
    
        riskPerShare = $('#riskPerShare').val();
        if(riskPerShare < 0){
            $('#riskPerShare').val( $('#riskPerShare').val()*-1 );
        }
        buySellQuan = $('#buySellQuan').val();
        if(buySellQuan < 0){
            $('#buySellQuan').val( $('#buySellQuan').val()*-1 );
        }

    }else{
        alert('Please fill all fields before submit!')
    }
}