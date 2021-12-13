CREATE OR ALTER PROCEDURE [dbo].[assigntask]
(
    @taskid INT,
    @email VARCHAR(255)
)
AS
BEGIN
    SET NOCOUNT ON;
 UPDATE [dbo].[taskAssignment]
            SET taskLead = @email
            WHERE
                taskId = @taskid;
END;
GO