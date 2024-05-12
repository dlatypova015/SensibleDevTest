using Microsoft.AspNetCore.Mvc;
using ToDoListApi.DTOModels;
using ToDoListApi.Repositories;

namespace ToDoListApi.Controllers
{
    public class CasesController : ControllerBase
    {
        private readonly EFContext _context;
        private ICasesRepository _casesRepository;
        private readonly ILogger<CasesController> _logger;

        public CasesController(EFContext context, ILogger<CasesController> logger)
        {
            _context = context;
            _casesRepository = new CasesRepository(_context);
            _logger = logger;
        }

        [HttpGet]
        [Route("getcases")]
        public IEnumerable<CaseDTOModel> Get(string? filterString, bool getOnlyInWork)
        {
            try
            {
                IEnumerable<CaseDTOModel> caseDTOModels = _casesRepository.Get().ToList()
                    .Select(i => new CaseDTOModel(i))
                    .Where(i => (!getOnlyInWork || !i.IsCompleted) &&
                    (i.Name?.ToLower().Contains(filterString?.ToLower() ?? "") ?? String.IsNullOrEmpty(filterString)));

                _logger.LogInformation("getcases responce sent successfully");

                return caseDTOModels;
            }
            catch (Exception ex) 
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

        [HttpPost]
        [Route("addcase")]
        public void Add(CaseDTOModel caseDTOModel)
        {
            try
            {
                _casesRepository.Add(caseDTOModel.GetCase());

                _logger.LogInformation("addcase responce sent successfully");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

        [HttpPost]
        [Route("updatecase")]
        public void Update(CaseDTOModel caseDTOModel)
        {
            try
            {
                _casesRepository.Update(caseDTOModel.GetCase());

                _logger.LogInformation("updatecase responce sent successfully");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

        [HttpPost]
        [Route("docasetask")]
        public void DoTask(Guid Id)
        {
            try
            {
                var caseModel = _casesRepository.Get(Id);
                caseModel.CloseDate = DateTime.Now;
                _casesRepository.Update(caseModel);

                _logger.LogInformation("docasetask responce sent successfully");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

        [HttpDelete]
        [Route("deletecase")]
        public void Delete(Guid Id)
        {
            try
            {
                _casesRepository.Delete(Id);

                _logger.LogInformation("deletecase responce sent successfully");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

    }
}
