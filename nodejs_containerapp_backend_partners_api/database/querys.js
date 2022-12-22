exports.querys = {
    // getAllWorkers: "SELECT TOP(500) * FROM [webstore].[dbo].[Workers]",
    getAllPartners: "SELECT TOP(500) * FROM Partners",
    getPartnerById: "SELECT * FROM Partners Where id = @id",
    addNewPartner:
      "INSERT INTO Partners (email, name, project) VALUES (@email,@name,@project);",
    deletePartner: "DELETE FROM Partners WHERE id= @id",
    updatePartnerById:
      "UPDATE Partners SET email = @email, name = @name, project = @project WHERE id = @id",
  };