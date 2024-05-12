using ToDoListApi.Models;

namespace ToDoListApi.DTOModels
{
    // Модель для внешнего представления. Инициализировать непосредственно перед отправкой!
    public class CaseDTOModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime? CloseDate { get; set; }
        public DateTime Deadline { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsOverdue { get; set; }
        public CaseDTOModel(CaseTable caseModel)
        {
            Id = caseModel.Id;
            Name = caseModel.Name;
            CreateDate = caseModel.CreateDate;
            CloseDate = caseModel.CloseDate;
            Deadline = caseModel.Deadline;
            IsCompleted = CloseDate != null;
            IsOverdue = CloseDate == null && Deadline < DateTime.Now;
        }
        public CaseTable GetCase()
        {
            return new CaseTable
            {
                Id = Id,
                Name = Name,
                CreateDate = CreateDate,
                CloseDate = CloseDate,
                Deadline = Deadline
            };
        }
    }
}
