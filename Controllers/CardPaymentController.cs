using System;
using bank_site.Models;
using Microsoft.AspNetCore.Mvc;

namespace bank_site.Controllers
{
    
    [Route("/api/[controller]")]
    public class CardPaymentController : Controller
    {
        private CardPaymentRepository CardPaymentRepo;
        
        public CardPaymentController()
        {
           CardPaymentRepo = new CardPaymentRepository();
        }
        
        [HttpPost("[action]")]
        public string Post([FromForm] CardPaymentPostRequest cardPayment)
        {
            var datenow = DateTime.Now;
            CardPaymentRepo.Create(
                new CardPayment{
                    CardNumber = cardPayment.creditCard, 
                    Comment= cardPayment.comment,
                    Date = datenow,
                    LastModifiedDate = datenow,
                    Email = cardPayment.email,
                    State = CardPaymentState.Pending,
                    Sum = Decimal.Parse(cardPayment.sum)
                });
            CardPaymentRepo.Save();
            return $"OK";
        }
        
        [HttpGet("[action]")]
        public JsonResult Index()//Добавить фильтр
        {
            return Json(CardPaymentRepo.GetAll());
        }

        [HttpPatch("[action]")]
        public void CancelPayment([FromBody]int id)
        {
            var payment = CardPaymentRepo.Get(id);
            payment.State = CardPaymentState.Canceled;
            CardPaymentRepo.Save();
        }
        
        
    }
}