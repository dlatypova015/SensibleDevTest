namespace ToDoListApi.Models
{
    public class CaseTable
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime? CloseDate { get; set; }
        public DateTime Deadline { get; set; }
    }
}
