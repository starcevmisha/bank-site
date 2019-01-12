using System;
namespace bank_site.Models
{
    public class CardPayment
    {
        public int Id { get; set; }
        public DateTime Date{ get; set; }
        public string CardNumber { get; set; }
        public decimal Sum { get; set; }
        public string Comment { get; set; }
        public string Email { get; set; }
        public CardPaymentState State {get; set; }
        public DateTime LastModifiedDate{ get; set; }
    }
}

public enum CardPaymentState
{    
    Pending = 0,
    Canceled = 1,
    Completed = 2
}