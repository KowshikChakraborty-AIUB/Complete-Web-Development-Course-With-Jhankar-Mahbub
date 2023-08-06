/*  

1. If Ticket quantity is less than or equal to 100, price per ticket = 100 TK.

2. If Ticket quantity is more than 100 but less than or equal to 200, price per ticket= 90 TK.

3. If Ticket quantity is 200+, price per ticket= 70 TK.

First 100 ==> 100 TK./ticket
Second 100 (101-200) ==> 90 TK./ticket
More than 200 (200+) ==> 70 TK./ticket

Note: Suppose you want to buy 120 tickets. That means for the first 100 tickets, you have to pay 100 TK. per ticket and for the rest 20, you will pay 90 Tk. per ticket.

In same way, if you want to buy 250 tickets, you have to pay 100 TK. per ticket for the first 100 tickets, 90 TK. per ticket for the second 100 tickets and for the rest 50 tickets, you will pay 70 TK. per ticket.

*/


function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const total = first100Price + restTicketPrice;
        return total;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const total = first100Price + second100Price + restTicketPrice;
        return total;
    }
}

const quantity = 250;
console.log('Enter the number of tickets you want to buy:', quantity);

const price = ticketPrice(quantity);
console.log('Total Price:', price);