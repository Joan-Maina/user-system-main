
CREATE OR ALTER PROCEDURE [dbo].[assignproject]
(
@projectid INT,
@userone VARCHAR(255),
@usertwo VARCHAR(255),
@userthree VARCHAR(255),
@userfour VARCHAR(255),
@userfive VARCHAR(255)
)
AS
BEGIN
SET NOCOUNT ON
 INSERT INTO [dbo].[userProjects]
            VALUES (@projectid,@userone, @usertwo, @userthree, @userfour,@userfive)
END;
GO