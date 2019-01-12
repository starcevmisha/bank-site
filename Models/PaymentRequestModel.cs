namespace bank_site.Models
{
    public class PaymentRequestModel
    {
            public int Id { get; set; }
            public string Inn { get; set; }
            public string Bik { get; set; }
            public string AccountNumber { get; set; }
            public string Purpose { get; set; }
            public decimal Amount { get; set; }
            public string PhoneNumber { get; set; }
            public string Email { get; set; }
    }
}