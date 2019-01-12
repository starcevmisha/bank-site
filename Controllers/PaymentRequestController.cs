using System;
using bank_site.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace bank_site.Controllers
{
    [Route("/api/[controller]")]
    public class PaymentRequestController : Controller
    {
        private PaymentRequestsRepository PaymentRequestsRepo;

        public PaymentRequestController()
        {
            PaymentRequestsRepo = new PaymentRequestsRepository();
        }

        [HttpPost("[action]")]
        public string Post([FromForm] PaymentRequestModel paymentRequest)
        {
            var datenow = DateTime.Now;
            PaymentRequestsRepo.Create(paymentRequest);
            PaymentRequestsRepo.Save();
            return $"OK";
        }

        [HttpGet("[action]")/*, Authorize(Roles = "Manager")*/]
        public JsonResult Index(){
            return Json(PaymentRequestsRepo.GetAll());
        }
    }
}