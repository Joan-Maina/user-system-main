
CREATE OR ALTER PROCEDURE [dbo].[registertask]
    @taskTitle VARCHAR(255),
    @projectId INT,
    @taskStartdate DATE,
    @taskEnddate DATE
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	INSERT INTO [dbo].[taskDetails]
	(taskTitle, projectId, taskStartdate, taskEnddate)
	VALUES
	(@taskTitle, @projectId, @taskStartdate, @taskEnddate);
END;